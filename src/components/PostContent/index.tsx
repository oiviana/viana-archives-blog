import { PortableText, PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import Image from "next/image"
import { CodeBlockType, ImageBlock } from "@/types/post-content"
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder"
import CodeBlock from "../CodeBlock.tsx"

const components: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeBlockType }) => (
      <CodeBlock code={value.code} language={value.language} />
    ),
    image: ({ value }: { value: ImageBlock }) => (
      <Image
        src={generateImageUrl(value.asset)}
        alt={value.alt || ""}
        width={850}
        height={600}
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               850px"
        className="my-4 rounded"
        loading="lazy"
      />
    ),
  },
}

export function BlogPostContent({ content }: { content: PortableTextBlock[] }) {
  return <PortableText value={content} components={components} />
}

