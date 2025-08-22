import { BlogPostProps } from "@/types/post";
import { getPosts } from "@/utils/getPosts";
import Link from "next/link";

export default async function Home() {
  const posts: BlogPostProps[] = await getPosts()
  console.log("posts ", posts)
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {posts?.map((post, index) => (
        <Link
          key={index}
          href={`/artigos/${post.slug.current}`}
          className="flex bg-amber-300 p-4 rounded hover:bg-amber-400 transition"
        >
          {post.postTitle}
        </Link>
      ))}
    </div>
  );
}
