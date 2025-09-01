import PostCard from "@/components/PostCard"
import { BlogPostProps } from "@/types/post"
import { getPosts } from "@/utils/sanity/getPosts"
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder"

export default async function PostGrid() {
  const posts: BlogPostProps[] = await getPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-6 w-full max-w-5xl mx-auto  mt-4 lg:mt-14">
      {posts?.map((post, index) => (
        <PostCard
          key={index}
          postTitle={post.postTitle}
          slug={post.slug.current}
          postDescription={post.postDescription}
          authorName={post.authorName}
          readingTime={post.readingTime}
          thumbnail={generateImageUrl(post.thumbnailImage.asset)}
          postCategory={post.postCategory}
        />
      ))}
    </div>
  )
}
