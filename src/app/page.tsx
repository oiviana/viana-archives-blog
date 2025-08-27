import { Suspense } from "react"
import PostsGrid from "../components/PostGrid"
import Skeleton from "@/components/Skeleton"

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <Suspense fallback={<Skeleton skeletonType="grid-cards" />}>
        <PostsGrid />
      </Suspense>
    </div>
  )
}
