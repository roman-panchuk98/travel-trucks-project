"use client";

import CamperByIdInformation from "@/components/CamperById/CamperByIdInformation/CamperByIdInformation";
import { getCamperById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CamperById.module.css";
import CamperByIdFeatures from "@/components/CamperById/CamperByIdFeatures/CamperByIdFeatures";
import CamperByIdBooking from "@/components/CamperById/CamperByIdBooking/CamperByIdBooking";
import CamperbyIdReviews from "@/components/CamperById/CamperbyIdReviews/CamperbyIdReviews";
import { useState } from "react";

const CamperByIdClient = () => {
  const [tooglePage, setTooglePage] = useState<"features" | "reviews">(
    "features"
  );

  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["camperById", `id:${id}`],
    queryFn: () => getCamperById(id),
    refetchOnMount: false,
  });

  if (isLoading || !data) {
    return <p>Load</p>;
  }

  return (
    <section className={css.camperByIdSection}>
      <CamperByIdInformation camper={data} />
      <div className={css.camperIdToggleBox}>
        <div className={css.camperIdToggle}>
          <button
            type="button"
            onClick={() => setTooglePage("features")}
            className={`${css.camperToggleBtn} ${
              tooglePage === "features" ? css.tooglePage : ""
            }`}
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => setTooglePage("reviews")}
            className={`${css.camperToggleBtn} ${
              tooglePage === "reviews" ? css.tooglePage : ""
            }`}
          >
            Reviews
          </button>
        </div>
      </div>
      <div className={css.camperByIdFeaturesBookingBox}>
        {tooglePage === "features" ? (
          <CamperByIdFeatures camper={data} />
        ) : (
          <CamperbyIdReviews camper={data} />
        )}
        <CamperByIdBooking />
      </div>
    </section>
  );
};

export default CamperByIdClient;
