"use client"

import PostCard from "@/components/PostCard"
import { IoSearch } from "react-icons/io5"
import { IoChevronDown } from "react-icons/io5"
import { useMemo, useState } from "react"

export type PostListItem = {
  postTitle: string
  postDescription: string
  authorName: string
  readingTime: string
  slug: string
  thumbnail: string
  postCategory: string
}

type PostListIslandProps = {
  posts: PostListItem[]
}

function normalizeSearchValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export default function PostListIsland({ posts }: PostListIslandProps) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  const categories = useMemo(() => {
    return Array.from(new Set(posts.map((post) => post.postCategory).filter(Boolean))).sort()
  }, [posts])

  const filteredPosts = useMemo(() => {
    const normalizedSearch = normalizeSearchValue(search)

    return posts.filter((post) => {
      const matchesCategory = category === "all" || post.postCategory === category
      const normalizedTitle = normalizeSearchValue(post.postTitle)
      const matchesSearch =
        normalizedSearch.length === 0 ||
        normalizedSearch.split(/\s+/).every((term) => normalizedTitle.includes(term))

      return matchesCategory && matchesSearch
    })
  }, [category, posts, search])

  return (
    <section className="w-full max-w-5xl mx-auto mt-12 lg:mt-14">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block w-full lg:max-w-xl">
          <span className="sr-only">Buscar artigo</span>
          <IoSearch
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white-secondary"
            size={20}
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por artigo"
            className="h-12 w-full rounded border border-background-extralight bg-background-light/70 pl-12 pr-4 font-bitter text-base text-white-main outline-none transition-colors placeholder:text-white-secondary focus:border-green-main"
          />
        </label>

        <label className="relative block w-full lg:max-w-64">
          <span className="sr-only">Filtrar por tema</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-12 w-full appearance-none rounded border border-background-extralight bg-background-light/70 py-0 pl-4 pr-12 font-jetbrains text-sm text-white-main outline-none transition-colors focus:border-green-main cursor-pointer"
          >
            <option value="all">Todos os temas</option>
            {categories.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
          <IoChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white-main"
            size={16}
          />
        </label>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-6">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              postTitle={post.postTitle}
              slug={post.slug}
              postDescription={post.postDescription}
              authorName={post.authorName}
              readingTime={post.readingTime}
              thumbnail={post.thumbnail}
              postCategory={post.postCategory}
            />
          ))}
        </div>
      ) : (
        <div className="rounded border border-background-extralight bg-background-light/50 p-8 text-center">
          <p className="font-lora text-lg text-white-secondary">
            Nenhum artigo encontrado para essa busca.
          </p>
        </div>
      )}
    </section>
  )
}
