import type { PortableTextBlock } from "@portabletext/types"

type HeadingLevel = 1 | 2 | 3 | 4

type PortableTextChild = {
  text?: string
}

type HeadingBlock = PortableTextBlock & {
  _key?: string
  style?: string
  children?: PortableTextChild[]
}

export type PostHeading = {
  id: string
  text: string
  level: HeadingLevel
}

function getBlockText(block: HeadingBlock) {
  return block.children?.map((child) => child.text ?? "").join("").trim() ?? ""
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function getHeadingId(block: HeadingBlock) {
  const text = getBlockText(block)
  const slug = slugify(text) || "secao"
  const key = block._key ? `-${block._key.slice(0, 8)}` : ""

  return `${slug}${key}`
}

export function getPostHeadings(content: PortableTextBlock[]): PostHeading[] {
  return content
    .filter((block): block is HeadingBlock => {
      return ["h1", "h2", "h3", "h4"].includes(String(block.style))
    })
    .map((block) => {
      const text = getBlockText(block)

      return {
        id: getHeadingId(block),
        text,
        level: Number(String(block.style).replace("h", "")) as HeadingLevel,
      }
    })
    .filter((heading) => heading.text.length > 0)
}
