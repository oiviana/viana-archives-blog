import imageUrlBuilder from "@sanity/image-url"
import { sanityClient } from "@/lib/sanityClient"
import { ImageBlock } from "@/types/post-content"

const builder = imageUrlBuilder(sanityClient)

export function generateImageSource(source: ImageBlock["asset"]) {
  return builder.image(source) 
}
