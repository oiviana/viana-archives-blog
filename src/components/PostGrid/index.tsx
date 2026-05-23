import PostListIsland, { PostListItem } from "@/components/PostListIsland"
import { BlogPostProps } from "@/types/post"
import { getPosts } from "@/utils/sanity/getPosts"
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder"

export default async function PostGrid() {
  const posts: BlogPostProps[] = await getPosts()
  const formattedPosts: PostListItem[] = posts?.map((post) => ({
    postTitle: post.postTitle,
    slug: post.slug.current,
    postDescription: post.postDescription,
    authorName: post.authorName,
    readingTime: post.readingTime,
    thumbnail: generateImageUrl(post.thumbnailImage.asset),
    postCategory: post.postCategory,
  })) ?? []

  return <PostListIsland posts={formattedPosts} />
}
