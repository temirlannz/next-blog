'use client';

import React, {FC, useState} from 'react'
import Link from "next/link";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useRouter} from "next/navigation";

interface ButtonActionsProps {
    id: string
}

const ButtonActions: FC<ButtonActionsProps> = ({ id }) => {
    const router = useRouter();

    const { mutate: deletePost } = useMutation({
        mutationFn: async () => {
            return await axios.delete(`/api/posts/${id}`);
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: () => {
            router.push('/');
            router.refresh();
        }
    });

    return (
        <div className='space-x-2'>
            <button>
                <Link href={`/edit/${id}`} className='btn btn-xs'>
                    Edit
                </Link>
            </button>

            <label htmlFor="my_modal_7" className='btn btn-outline btn-error btn-xs'>
                Delete
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-full max-w-sm">
                    <h3 className="text-lg font-bold mb-5">Are you sure to delete post?</h3>
                    <div className='flex justify-end gap-1'>
                        <label htmlFor="my_modal_7" className='btn btn-ghost btn-sm'>
                            Cancel
                        </label>
                        <button onClick={() => deletePost()} className='btn btn-error btn-sm btn-outline'>
                            Delete
                        </button>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    )
}
export default ButtonActions
