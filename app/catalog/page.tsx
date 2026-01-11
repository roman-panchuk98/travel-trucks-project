import { getAllCampers } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";

const CatalogPage = async () => {
  const queryClient = new QueryClient();

  const intitalPage = 1;
  const initialFilters = {};

  await queryClient.prefetchQuery({
    queryKey: ["campers", intitalPage, initialFilters],
    queryFn: () => getAllCampers({ limit: 4, page: intitalPage }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
};

export default CatalogPage;
