interface SkeletonProps {
  skeletonType: "grid-cards" | "page-content"
}
export default function Skeleton({ skeletonType }: SkeletonProps) {
  return (
    <>
      {skeletonType === "grid-cards" && (
        <div className="skeleton h-16"> skeleton grid </div>
      )}

      {skeletonType === "page-content" && (
        <div className="flex flex-col w-full max-w-[850px] mx-auto mt-14">
          <div className="skeleton h-[450px] mb-5"></div>
          <div className="flex gap-4 mb-4">
            <div className="h-14 w-14 !rounded-[40px] skeleton"></div>
            <div className="h-14 w-3xs skeleton"> </div>
          </div>
          <div className="skeleton h-6 w-[340px] mb-4"></div>
          <div className="skeleton h-6 w-[340px] mb-6"></div>
          <div className="skeleton h-[600px] "></div>
        </div>
      )}
    </>
  )
}
