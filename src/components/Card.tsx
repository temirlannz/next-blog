import React, {FC} from 'react'
import Link from "next/link";
import {Tag} from ".prisma/client";

interface PostCardProps {
    post: {
        id: string
        title: string
        content: string
        tag: Tag
    }
}

const Card: FC<PostCardProps> = ({ post }) => {
    return (
        <div className="card w-full bg-base-100 shadow-md">
            <div className="card-body space-y-1">
                <h2 className="card-title">{post.title}</h2>
                <p className='truncate'>{post.content}</p>
                <span className="badge badge-ghost badge-sm">{post.tag.name}</span>
                <div className="card-actions justify-end mt-3">
                    <Link href={`/blog/${post.id}`} className='hover:underline'>
                        Read more {'->'}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Card
