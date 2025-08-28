import { getPostBySlug } from "../../../utils/sanity/getPostBySlug";
import { BlogPostContent } from "../../../components/PostContent";
import { BlogPostProps } from "@/types/post";
import Image from "next/image";
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post: BlogPostProps = await getPostBySlug(slug);

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <div className="prose lg:prose-xl max-w-[850px] mx-auto py-10">

            <Link href="/" className="flex items-center gap-3 my-3 font-bitter text-base">
                <IoArrowBack />
                Voltar
            </Link>

            <div className="relative rounded-2xl overflow-hidden h-[476px]">
                <Image
                    src={generateImageUrl(post.thumbnailImage)}
                    width={850}
                    height={180}
                    alt={post.postTitle}
                    objectFit="contain"
                    className="border-4 border-[#141217] rounded-2xl"
                    priority={true}
                    loading="eager"
                />
                <div className="absolute bg-gradient-to-t from-[#141217] from-35% to-transparent w-full bottom-0 p-2 px-4 rounded-b-2xl" >
                    <h1 className="text-lg lg:text-4xl mb-3 font-lora">{post.postTitle}</h1>
                    <div className="flex items-center gap-4">
                        <Image
                            src={generateImageUrl(post.authorImage)}
                            width={56}
                            height={56}
                            alt={post.postTitle}
                            objectFit="contain"
                            className="rounded-full"
                        />
                        <div className="text-lg font-jetbrains">
                            <span>Autor: </span> <span>{post.authorName}</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-7 gap-3 font-lora">
                <span>Tempo de leitura: {post.readingTime} minutos.</span>
                <span>
                    Publicado em:{" "}
                    {new Date(post.postDate).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}{"."}
                </span>
            </div>
            <article className="font-bitter leading-7 lg:leading-8 text-base lg:text-lg">
                <BlogPostContent content={post.postContent} />
            </article>
        </div>
    );
}
