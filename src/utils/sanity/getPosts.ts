import { sanityClient } from '@/lib/sanityClient'

export async function getPosts() {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(postDate desc){
      postTitle,
      postDescription,
      slug,
      thumbnailImage,
      postCategory,
      authorName,
      readingTime
    }`,
    {}, 
    { next: { revalidate: 60, } } 
  )
}
