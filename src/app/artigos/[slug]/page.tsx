import { getPostBySlug } from "../../../utils/sanity/getPostBySlug";
import { BlogPostContent } from "../../../components/PostContent";
import { BlogPostProps } from "@/types/post";
import Image from "next/image";
import { generateImageUrl } from "@/utils/sanity/sanityImageBuilder";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import CategoryFlag from "@/components/CategoryFlag";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { formatOgImage } from "@/utils/formatOgImage";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post: BlogPostProps = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado | Viana Archives",
      description: "O post solicitado não foi encontrado.",
      openGraph: {
        title: "Post não encontrado | Viana Archives",
        description: "O post solicitado não foi encontrado.",
        url: `https://meublog.com/post/${slug}`,
        siteName: "Meu Blog",
        images: [
          {
            url: "https://meublog.com/default-og.png",
            width: 1200,
            height: 630,
            alt: "Imagem padrão do Meu Blog",
          },
        ],
        locale: "pt_BR",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Post não encontrado | Meu Blog",
        description: "O post solicitado não foi encontrado.",
        images: ["https://meublog.com/default-og.png"],
      },
    };
  }

  return {
    title: `${post.postTitle} |  Viana Archives`,
    description: post.postDescription,
    openGraph: {
      title: post.postTitle,
      description: post.postDescription,
      url: `https://meublog.com/post/${slug}`,
      siteName: "Viana Archives",
      images: [
        {
          url: formatOgImage(post.thumbnailImage),
          width: 1200,
          height: 630,
          alt: post.postTitle,
        },
      ],
      locale: "pt_BR",
      type: "article",
      publishedTime: post.postDate,
      authors: ["Lucas Viana"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.postTitle,
      description: post.postDescription,
      images: [generateImageUrl(post.thumbnailImage)],
    },
  };
}


export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: BlogPostProps = await getPostBySlug(slug);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <>
      <Header />
      <div className="prose lg:prose-xl max-w-[850px] mx-auto py-10 pt-[5.2rem] px-3.5 lg:px-0">
        <Link
          href="/"
          className="flex items-center gap-3 my-3 font-bitter text-base lg:text-lg text-white-main hover:text-green-main transition-colors"
        >
          <IoArrowBack />
          Voltar
        </Link>

        <div className="relative rounded-2xl overflow-hidden h-[260px] lg:h-[476px]">
          <Image
            src={generateImageUrl(post.thumbnailImage)}
            width={850}
            height={180}
            sizes="(max-width: 480px) 360px,
         (max-width: 768px) 480px,
         (max-width: 1024px) 600px,
         (max-width: 1280px) 768px,
         850px"
            alt={post.postTitle}
            className="border-4 border-[#141217] rounded-2xl object-contain"
            priority
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute bg-gradient-to-t from-[#141217] from-35% to-transparent w-full bottom-5 lg:bottom-0 p-2 lg:px-4 rounded-b-2xl">
            <h1 className="text-lg lg:text-[3rem] mb-3 font-raleway font-semibold text-white-main">
              {post.postTitle}
            </h1>
            <article className="text-base lg:text-xl mb-3 font-bitter ">
              {post.postDescription}
            </article>
          </div>
          <div className="absolute right-3 top-4 lg:right-7 lg:top-7 w-max min-w-20">
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
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <div>
              <span className="text-base lg:text-lg font-lora text-white-main">Autor: </span>{" "}
              <span className="text-white-secondary text-base lg:text-lg font-lora">
                {post.authorName}
              </span>
            </div>
            <span className="text-white-secondary ml-1.5 font-lora border-l border-transparent lg:border-background-extralight pl-3">
              {post.readingTime} minutos de leitura.
            </span>
          </div>
        </div>

        <div className="flex flex-col my-9 lg:my-7 gap-3 font-lora mb-8 lg:mb-16">
          <span className="text-white-secondary mb-1">
            Publicado em:{" "}
            {new Date(post.postDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            .
          </span>
          {post.updatedPostDate && (
            <span className="text-white-secondary">
              Atualizado em:{" "}
              {new Date(post.updatedPostDate).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              .
            </span>
          )}
        </div>

        <article className="font-bitter leading-7 lg:leading-8 text-base lg:text-lg post-content">
          <BlogPostContent content={post.postContent} />
        </article>
      </div>
    </>
  );
}
