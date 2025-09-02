import { ImageBlock } from "@/types/post-content";
import { generateImageSource } from "./sanity/sanityImageSource";

export function formatOgImage(source: ImageBlock["asset"]): string {
  return generateImageSource(source)
    .width(1200)
    .height(630)
    .fit('crop') 
    .auto('format') 
    .url()
}