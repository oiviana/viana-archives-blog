import PostCard from "@/components/PostCard"
import { BlogPostProps } from "@/types/post"
import { getPosts } from "@/utils/sanity/getPosts"
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder"

export default async function PostGrid() {
  const posts: BlogPostProps[] = await getPosts()

  return (
    <div className="flex w-full max-w-5xl flex-col gap-6 mx-auto mt-12 lg:mt-14">
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
