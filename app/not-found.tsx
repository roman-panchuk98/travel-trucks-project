import { Metadata } from "next";
import NotFoundClient from "./not-found-client";

export const metadata: Metadata = {
  title: "404 - Page is not found",
  description: "This page does not exist.",
  openGraph: {
    title: "404 - Page is not found",
    description: "This page does not exist.",
    url: "", // Не забути додати посилання на живу сторінку!
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
