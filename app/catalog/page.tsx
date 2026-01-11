import { getAllCampers } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog - Travel Trucks",
  description:
    "Explore our camper catalog with a wide selection of RVs available for rent. Use filters to quickly find campers by location, type, and available equipment.",
  openGraph: {
    title: "Catalog - Travel Trucks",
    description:
      "Explore our camper catalog with a wide selection of RVs available for rent. Use filters to quickly find campers by location, type, and available equipment.",
    url: "https://travel-trucks-project-rho.vercel.app/catalog",
    images: [
      {
        url: "/images/homePage/Picture-1x.png",
        width: 1200,
        height: 630,
        alt: "Travel Trucks camper catalog",
      },
    ],
  },
};

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
