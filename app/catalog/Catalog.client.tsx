"use client";

import CatalogList from "@/components/CatalogList/CatalogList";
import { getAllCampers } from "@/lib/api";
import { useCamperStore } from "@/lib/store/camperStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import css from "./CatalogClient.module.css";
import { ScaleLoader } from "react-spinners";
import SidebarCatalog from "@/components/SidebarCatalog/SidebarCatalog";

const CatalogClient = () => {
  const {
    campers,
    limit,
    filters,
    setCampers,
    appendCampers,
    resetFilters,
    total,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  } = useCamperStore();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  const { data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["campers", page, filters],
    queryFn: () =>
      getAllCampers({
        limit,
        page,
        ...filters,
      }),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!data || isPlaceholderData) return;

    if (page === 1) {
      setCampers(data.items, data.total);
    } else {
      appendCampers(data.items);
    }
  }, [data, page, setCampers, appendCampers, isPlaceholderData]);

  const handleReset = () => {
    if (!filters || Object.keys(filters).length === 0) return;
    resetFilters();
    setPage(1);
  };

  if (!campers.length && isFetching) {
    return <ScaleLoader className={css.loadingFetching} color="black" />;
  }

  const loadMore = campers.length < total;

  return (
    <section className={css.catalogContainer}>
      <SidebarCatalog onReset={handleReset} />
      <div className={css.catalogListBox}>
        <CatalogList
          campers={campers}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorite={isFavorite}
        />
        {loadMore && (
          <button
            type="button"
            className={css.loadMoreBtn}
            onClick={() => setPage((p) => p + 1)}
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogClient;
