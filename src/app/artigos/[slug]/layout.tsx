import ScrollToTopOnNavigation from "@/components/ScrollToTopOnNavigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Viana Archives",
  },
}

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTopOnNavigation />
      {children}
    </>
  )
}
