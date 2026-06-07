"use client"

import { PostHeading } from "@/utils/getPostHeadings"
import { IoChevronDown } from "react-icons/io5"
import { useState } from "react"

type TableOfContentsProps = {
  headings: PostHeading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (headings.length === 0) {
    return null
  }

  const baseLevel = Math.min(...headings.map((heading) => heading.level))

  return (
    <nav
      aria-label="Indice do artigo"
      className="rounded border border-background-extralight bg-background-light/50 p-4 font-bitter"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className={`flex w-full items-center justify-between gap-4 text-left ${ isOpen && "mb-4" } cursor-pointer`}
      >
        <span className="block font-jetbrains text-lg lg:text-xl font-semibold uppercase text-green-main">
          Neste artigo
        </span>
        <IoChevronDown
          aria-hidden="true"
          className={`text-green-main transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={22}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ol className="flex flex-col gap-2 pt-4">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === baseLevel ? "mt-4 first:mt-0" : ""}>
                <a
                  href={`#${heading.id}`}
                  className={`block leading-5 text-white-secondary transition-colors hover:text-green-main ${
                    heading.level === baseLevel ? "text-base lg:text-lg" : "text-sm lg:text-base"
                  }`}
                  style={{ paddingLeft: `${(heading.level - baseLevel) * 16}px` }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  )
}
