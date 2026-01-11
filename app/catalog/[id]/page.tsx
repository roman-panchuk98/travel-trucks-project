import { getCamperById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CamperByIdClient from "./CamperById.client";
import { Metadata } from "next";

interface CamperByIdProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CamperByIdProps): Promise<Metadata> {
  const { id } = await params;
  const rv = await getCamperById(id);
  return {
    title: `${rv.name}`,
    description: `${rv.description}`,
    openGraph: {
      title: `${rv.name}`,
      description: `${rv.description}`,
      url: ``,
      images: [
        {
          url: `${rv.gallery[0].thumb}`,
          width: 1200,
          height: 630,
          alt: `${rv.name}`,
        },
      ],
    },
  };
}

const CamperById = async ({ params }: CamperByIdProps) => {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["camperById", `id:${id}`],
    queryFn: () => getCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperByIdClient />
    </HydrationBoundary>
  );
};

export default CamperById;
