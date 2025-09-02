import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
    return (
        <>
            <Header/>
            <Skeleton skeletonType="page-content" />
        </>
    )
}