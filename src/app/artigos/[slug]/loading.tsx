import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carregando",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function Loading() {
    return (
        <>
            <Header/>
            <Skeleton skeletonType="page-content" />
        </>
    )
}