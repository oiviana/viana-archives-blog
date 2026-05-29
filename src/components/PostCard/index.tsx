import Link from "next/link"
import Image from "next/image"
import CategoryFlag from "@/components/CategoryFlag"

interface PostCardProps {
    postTitle: string
    postDescription: string
    authorName: string
    readingTime: string
    slug: string
    thumbnail: string
    postCategory: string
}

export default function PostCard({ postTitle, slug, thumbnail, postDescription, postCategory, readingTime }: PostCardProps) {
    return (
        <Link className="bg-[#23212c] rounded w-full p-2 flex flex-col lg:flex-row gap-4 post-card shadow border-2 border-transparent hover:border-green-main transition-all"
            href={`/artigos/${slug}`}
        >
            <div className="relative overflow-hidden h-47.5 lg:h-55 lg:w-90 lg:min-w-90">
                <Image
                    src={thumbnail}
                    width={360}
                    height={220}
                    alt={postTitle}
                    loading="eager"
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-start p-2 lg:p-5">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                    <CategoryFlag category={postCategory} />
                    <span className="text-white-secondary font-lora text-sm lg:text-base">
                        Tempo de leitura: {readingTime} minutos
                    </span>
                </div>
                <h2 className="text-xl lg:text-2xl  my-2 font-jetbrains text-white-main font-semibold leading-snug">
                    {postTitle}
                </h2>
                <p className="font-lora text-base lg:text-lg leading-7 text-white-main">
                    {postDescription}
                </p>
            </div>
        </Link>
    )
}
