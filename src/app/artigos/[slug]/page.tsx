import { getPostBySlug } from "../../../utils/sanity/getPostBySlug";
import { BlogPostContent } from "../../../components/PostContent";
import { BlogPostProps } from "@/types/post";

type PostPageProps = {
  params: Promise<{ slug: string }>; // 👈 params é uma Promise
};

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post:BlogPostProps = await getPostBySlug(slug);

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <article className="prose lg:prose-xl max-w-3xl mx-auto py-10">
            <h1>{post.postTitle}</h1>
            <BlogPostContent content={post.postContent} />
        </article>
    );
}
