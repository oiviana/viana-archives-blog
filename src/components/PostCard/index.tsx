import Link from "next/link"
import Image from "next/image"

interface PostCardProps {
    postTitle: string
    postDescription: string
    authorName: string
    readingTime: string
    slug: string
    thumbnail: string
}

export default function PostCard({ postTitle, slug, thumbnail, postDescription, readingTime }: PostCardProps) {
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
            <div>
                   <h2>{postTitle}</h2>
                   <h3>{postDescription}</h3>
                   <span>tempo de leitura: {readingTime} minutos</span>
            </div>
        </Link>
    )
}