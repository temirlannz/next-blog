import React, {FC, Suspense} from 'react'
import ButtonActions from "@/components/ButtonActions";
import ButtonBack from "@/components/ButtonBack";
import prisma from "../../../../prisma/client";
import LoadingSkeletonCard from "@/components/LoadingSkeletonCard";
import Loading from "@/app/blog/[id]/loading";

interface BlogDetailsProps {
    params: {
        id: string
    }
}

const getPost = async (id: string) => {
    const response = await prisma.post.findFirst({
        where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            content: true,
            tag: true
        }
    });

    return response;
}

const BlogDetails: FC<BlogDetailsProps> = async ({ params }) => {
    const post = await getPost(params.id);

    return (
        <Suspense fallback={<Loading />}>
            <div className='mt-10'>
                <ButtonBack />

                <span className="badge badge-ghost badge-sm mt-12 mb-2">{post?.tag.name}</span>
                <h1 className='text-2xl font-bold mb-6'>{post?.title}</h1>

                <ButtonActions id={params.id} />

                <p className='text-slate-700 mt-3'>
                    {post?.content}
                </p>
            </div>
        </Suspense>
    )
}
export default BlogDetails
