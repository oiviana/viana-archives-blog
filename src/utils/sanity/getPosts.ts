import { sanityClient } from '@/lib/sanityClient'

export async function getPosts() {
  return sanityClient.fetch(`*[_type == "blogPost"]{postTitle, postDescription, slug, thumbnailImage, postCategory, authorName, readingTime}`)
}