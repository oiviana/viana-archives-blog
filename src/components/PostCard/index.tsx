import Link from "next/link"
import Image from "next/image"

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
        <Link className="bg-[#23212c] rounded w-full max-w-[320px] h-[380px] p-2"
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
                <span>{postCategory}</span>
                <span>tempo de leitura: {readingTime} minutos</span>
                <h2>{postTitle}</h2>
                <h3>{postDescription}</h3>
            </div>
        </Link>
    )
}