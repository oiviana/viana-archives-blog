import PostCard from "@/components/PostCard";
import { BlogPostProps } from "@/types/post";
import { getPosts } from "@/utils/getPosts";
import { urlFor } from "@/utils/sanityImageBuilder";

export default async function Home() {
  const posts: BlogPostProps[] = await getPosts()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {posts?.map((post, index) => (
        <PostCard
          postTitle={post.postTitle}
          slug={post.slug.current}
          postDescription={post.postDescription}
          key={index}
          authorName={post.authorName}
          readingTime={post.readingTime}
          thumbnail={urlFor(post.thumbnailImage.asset)}
        />
      ))}
    </div>
  );
}
