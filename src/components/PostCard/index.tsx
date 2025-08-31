import Link from "next/link"
import Image from "next/image"
import CategoryFlag from "../CategoryFlag"

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
        <Link className="bg-[#23212c] rounded w-full max-w-[320px] h-[380px] p-2 flex flex-col justify-start post-card"
            href={`/artigos/${slug}`}
        >
            <div className="overflow-hidden max-h-[180px]">
                <Image
                    src={thumbnail}
                    width={305}
                    height={180}
                    alt={postTitle}
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col">
                <CategoryFlag category={postCategory}/>
                <span className="text-white-secondary font-lora text-sm my-1.5">tempo de leitura: {readingTime} minutos</span>
                <h2 className="text-lg lg:text-xl my-2.5 font-raleway">{postTitle}</h2>
                <h3 className="font-lora">{postDescription}</h3>
            </div>
        </Link>
    )
}