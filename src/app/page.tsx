import Card from "@/components/Card";
import prisma from "../../prisma/client";

const getPosts = async () => {
    const response = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            tag: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return response;
}

export default async function Home() {
    const posts = await getPosts();

    return (
        <div className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {posts.map(post => (
                <Card key={post.id} post={post} />
            ))}
        </div>
  )
}
