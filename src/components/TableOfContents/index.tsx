import { PostHeading } from "@/utils/getPostHeadings"

type TableOfContentsProps = {
  headings: PostHeading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) {
    return null
  }

  const baseLevel = Math.min(...headings.map((heading) => heading.level))

  return (
    <nav
      aria-label="Indice do artigo"
      className="rounded border border-background-extralight bg-background-light/50 p-4 font-bitter mb-7"
    >
      <span className="mb-6 block font-jetbrains text-xl font-semibold uppercase text-green-main">
        Neste artigo
      </span>
      <ol className="flex flex-col gap-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === baseLevel ? "mt-3 mb-2 first:mt-0" : ""}>
            <a
              href={`#${heading.id}`}
              className={`block leading-5 text-white-secondary transition-colors hover:text-green-main ${
                heading.level === baseLevel ? "text-lg" : "text-base"
              }`}
              style={{ paddingLeft: `${(heading.level - baseLevel) * 16}px` }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
