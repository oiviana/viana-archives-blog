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
        <Link className="bg-[#23212c] rounded w-full sm:max-w-[320px] h-[380px] p-2 flex flex-col justify-start post-card shadow relative border-2 border-transparent hover:border-green-main transition-all"
            href={`/artigos/${slug}`}
        >
            <div className="overflow-hidden h-[180px]">
                <Image
                    src={thumbnail}
                    width={305}
                    height={180}
                    alt={postTitle}
                    loading="eager"
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="flex flex-col">
                <CategoryFlag category={postCategory}/>
                <span className="text-white-secondary font-lora text-sm my-2 mt-4">Tempo de leitura: {readingTime} minutos</span>
                <h2 className="text-lg lg:text-xl my-2 font-jetbrains text-white-main font-semibold">{postTitle}</h2>
                <h3 className="font-lora">{postDescription}</h3>
            </div>
        </Link>
    )
}