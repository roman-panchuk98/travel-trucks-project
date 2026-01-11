import { Metadata } from "next";
import NotFoundClient from "./not-found-client";

export const metadata: Metadata = {
  title: "404 - Page is not found",
  description: "This page does not exist.",
  openGraph: {
    title: "404 - Page is not found",
    description: "This page does not exist.",
    url: "https://travel-trucks-project-rho.vercel.app",
    images: [
      {
        url: "./images/hero-picture.png",
        width: 1200,
        height: 630,
        alt: "404 - Page is not found",
      },
    ],
  },
};

const NotFound = () => {
  return <NotFoundClient />;
};

export default NotFound;
