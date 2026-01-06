import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Travel Trucks, choose the camper of your dreams",
  openGraph: {
    title: "Travel Trucks",
    description: "Travel Trucks, choose the camper of your dreams",
    url: "", // Не забути додати посилання на живу сторінку!
    images: [
      {
        url: "./images/hero-picture.png",
        width: 1200,
        height: 630,
        alt: "Camping by the lake",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
