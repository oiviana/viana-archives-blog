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

export default function PostCard({ postTitle, slug, thumbnail }: PostCardProps) {
    return (
        <div className="bg-blue-400 rounded w-full max-w-[320px]">
            <Image
                src={thumbnail}
                width={200}
                height={200}
                alt={postTitle}
            />
            <h2>{postTitle}</h2>
            <Link
                href={`/artigos/${slug}`}
                className="flex bg-amber-300 p-4 rounded hover:bg-amber-400 transition"
            ></Link>
        </div>
    )
}