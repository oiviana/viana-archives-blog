import { sanityClient } from "@/lib/sanityClient";

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      postTitle,
      postDescription,
      postDate,
      postCategory,
      authorName,
      authorImage,
      readingTime,
      thumbnailImage,
      references,
      postContent
    }`,
    { slug }
  );
}