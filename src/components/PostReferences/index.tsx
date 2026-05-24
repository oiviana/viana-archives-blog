import { PortableText } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"

type PostReferencesProps = {
  references?: PortableTextBlock[]
}

export default function PostReferences({ references }: PostReferencesProps) {
  if (!references || references.length === 0) {
    return null
  }

  return (
    <section className="mt-12 border-t border-background-extralight pt-8 lg:mt-16 lg:pt-10">
      <h2 className="font-jetbrains text-2xl font-semibold text-green-main lg:text-3xl">
        Referências
      </h2>
      <div className="post-references mt-5 font-bitter text-base leading-7 text-white-secondary lg:text-lg lg:leading-8">
        <PortableText value={references} />
      </div>
    </section>
  )
}
