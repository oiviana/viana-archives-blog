import { Suspense } from "react"
import PostsGrid from "../components/PostGrid"

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <Suspense fallback={<h2 className="text-xl font-semibold">Carregando...</h2>}>
        <PostsGrid />
      </Suspense>
    </div>
  )
}
