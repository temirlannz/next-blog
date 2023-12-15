'use client';

import Form from "@/components/Form";
import {SubmitHandler} from "react-hook-form";
import {FormInput} from "@/types";
import ButtonBack from "@/components/ButtonBack";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useRouter} from "next/navigation";
import LoadingSkeletonForm from "@/components/LoadingSkeletonForm";
import {Suspense} from "react";
import Loading from "@/app/create/loading";

const Create = () => {
    const router = useRouter();

    const { mutate: createPost, isPending } = useMutation({
        mutationFn: (newPost: FormInput) => {
            return axios.post('/api/posts/create', newPost);
        },
        onError: (error) => {
            console.log(error);
        },
        onSuccess: () => {
            router.push('/');
            router.refresh();
        }
    })

    const handleCreatePost: SubmitHandler<FormInput> = (data) => {
        console.log(data)
        createPost(data);
    };

    return (
        <Suspense fallback={<Loading />}>
            <div className='container px-0 mt-10'>
                <ButtonBack />
                <Form submit={handleCreatePost} isEditing={false}/>
            </div>
        </Suspense>
    )
}
export default Create
