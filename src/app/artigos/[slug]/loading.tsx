import DocumentTitle from "@/components/DocumentTitle"
import Header from "@/components/Header"
import Skeleton from "@/components/Skeleton"

export default function Loading() {
  return (
    <>
      <DocumentTitle title="Viana Archives" />
      <Header />
      <Skeleton skeletonType="page-content" />
    </>
  )
}
