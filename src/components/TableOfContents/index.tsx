import { PostHeading } from "@/utils/getPostHeadings"

type TableOfContentsProps = {
  headings: PostHeading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) {
    return null
  }

  return (
    <nav
      aria-label="Indice do artigo"
      className="rounded border border-background-extralight bg-background-light/50 p-4 font-bitter mb-8"
    >
      <span className="mb-3 block font-jetbrains text-sm font-semibold uppercase text-green-main">
        Neste artigo
      </span>
      <ol className="flex flex-col gap-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="block text-sm leading-5 text-white-secondary transition-colors hover:text-green-main"
              style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
