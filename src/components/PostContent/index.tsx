import { PortableText, PortableTextComponents } from "@portabletext/react"
import { PortableTextBlock } from "sanity"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import Image from "next/image"
import { CodeBlock, ImageBlock } from "@/types/post-content"
import { urlFor } from "@/utils/sanityImageBuilder"


const components: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeBlock }) => (
      <div className="my-4">
        <button
          onClick={() => navigator.clipboard.writeText(value.code)}
          className="bg-gray-200 px-2 py-1 rounded text-sm mb-2"
        >
          Copiar
        </button>
        <SyntaxHighlighter language={value.language || "javascript"}>
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }: { value: ImageBlock }) => (
      <Image
        src={urlFor(value.asset)} 
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
