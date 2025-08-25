import { PortableText, PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import Image from "next/image"
import { CodeBlockType , ImageBlock } from "@/types/post-content"
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder"
import  CodeBlock from "../CodeBlock.tsx"

const components: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeBlockType }) => (
      <CodeBlock code={value.code} language={value.language} />
    ),
    image: ({ value }: { value: ImageBlock }) => (
      <Image
        src={generateImageUrl(value.asset)}
        alt={value.alt || ""}
        width={800}
        height={600}
        className="my-4 rounded"
      />
    ),
  },
}

export function BlogPostContent({ content }: { content: PortableTextBlock[] }) {
  return <PortableText value={content} components={components} />
}

