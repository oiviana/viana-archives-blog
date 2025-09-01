import { getPostBySlug } from "../../../utils/sanity/getPostBySlug";
import { BlogPostContent } from "../../../components/PostContent";
import { BlogPostProps } from "@/types/post";
import Image from "next/image";
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import CategoryFlag from "@/components/CategoryFlag";
import Header from "@/components/Header";

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
        <>
        <Header/>
        <div className="prose lg:prose-xl max-w-[850px] mx-auto py-10 pt-6">

            <Link href="/" className="flex items-center gap-3 my-3 font-bitter text-base lg:text-lg hover:text-green-main transition-colors">
                <IoArrowBack />
                Voltar
            </Link>

            <div className="relative rounded-2xl overflow-hidden h-[476px]">
                <Image
                    src={generateImageUrl(post.thumbnailImage)}
                    width={850}
                    height={180}
                    alt={post.postTitle}
                    className="border-4 border-[#141217] rounded-2xl object-contain"
                    priority={true}
                    loading="eager"
                />
                <div className="absolute bg-gradient-to-t from-[#141217] from-35% to-transparent w-full bottom-0 p-2 px-4 rounded-b-2xl" >
                    <h1 className="text-lg lg:text-[3rem] mb-3 font-raleway font-semibold text-white-main">{post.postTitle}</h1>
                    <article className="text-base lg:text-xl mb-3 font-bitter ">{post.postDescription}</article>
                </div>
                <div className="absolute right-7 top-7 w-max min-w-20">
                    <CategoryFlag category={post.postCategory} />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    src={generateImageUrl(post.authorImage)}
                    width={56}
                    height={56}
                    alt={post.postTitle}
                    className="rounded-full object-contain"
                />
                <div className="flex gap-2 items-center">
                    <div>
                        <span className="text-lg font-lora">Autor: </span> <span className="text-white-secondary text-lg font-lora">{post.authorName}</span>
                    </div>
                    <span className="text-white-secondary ml-1.5 font-lora border-l border-background-extralight pl-3">{post.readingTime} minutos de leitura.</span>
                </div>
            </div>
            <div className="flex flex-col my-7 gap-3 font-lora mb-8 lg:mb-16">
                <span
                    className="text-white-secondary mb-1">
                    Publicado em:{" "}
                    {new Date(post.postDate).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}{"."}
                </span>
                {
                    post.updatedPostDate && (
                        <span
                            className="text-white-secondary">
                            Atualizado em:{" "}
                            {new Date(post.updatedPostDate).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}{"."}
                        </span>
                    )
                }

            </div>
            <article className="font-bitter leading-7 lg:leading-8 text-base lg:text-lg post-content">
                <BlogPostContent content={post.postContent} />
            </article>
        </div>
        </>
    );
}
