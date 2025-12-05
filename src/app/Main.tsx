import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";
import PostsGrid from "@/components/PostGrid";
import { Suspense } from "react";

export default function Main() {
    return (
        <>
            <Header />
            <div className="min-h-screen p-4 pt-16 lg:pt-28 lg:p-8 pb-20 sm:p-20">
                <Suspense fallback={<Skeleton skeletonType="grid-cards" />}>
                    <PostsGrid />
                </Suspense>
            </div>
        </>
    )
}