interface SkeletonProps {
  skeletonType: "grid-cards" | "page-content"
}
export default function Skeleton({ skeletonType }: SkeletonProps) {
  return (
    <>
      {skeletonType === "grid-cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6 w-full max-w-5xl mx-auto  mt-12 lg:mt-14"> 
        <div className="rounded w-full max-w-[320px] h-[380px] skeleton"></div>
        <div className="rounded w-full max-w-[320px] h-[380px] skeleton"></div>
        <div className="rounded w-full max-w-[320px] h-[380px] skeleton"></div>
        </div>
      )}

      {skeletonType === "page-content" && (
        <div className="flex flex-col w-full max-w-[850px] mx-auto pt-32 px-3.5 lg:px-0">
          <div className="skeleton h-[220px] lg:h-[450px] mb-5"></div>
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
