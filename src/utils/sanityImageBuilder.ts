import imageUrlBuilder from "@sanity/image-url"
import { sanityClient } from "../lib/sanityClient"
import { ImageBlock } from "@/types/post-content"

const builder = imageUrlBuilder(sanityClient)

// Função tipada corretamente
export function urlFor(source: ImageBlock["asset"]): string {
  return builder.image(source).url()
}