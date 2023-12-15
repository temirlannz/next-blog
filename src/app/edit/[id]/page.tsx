'use client';

import {SubmitHandler} from "react-hook-form";
import {FormInput} from "@/types";
import Form from "@/components/Form";
import ButtonBack from "@/components/ButtonBack";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {FC, Suspense} from "react";
import {useRouter} from "next/navigation";
import Loading from "@/app/edit/[id]/loading";

interface EditProps {
    params: {
        id: string
    }
}

const Edit: FC<EditProps> = ({ params }) => {
    const router = useRouter();

    const { data: dataPost, isLoading} = useQuery({
        queryKey: ['posts', params.id],
        queryFn: async () => {
            const response = await axios.get(`/api/posts/${params.id}`);

            return response.data;
        }
    });

    const { mutate: editPost } = useMutation({
        mutationFn: async (updatedPost: FormInput) => {
            return await axios.patch(`/api/posts/${params.id}`, updatedPost);
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: () => {
            router.push('/');
            router.refresh();
        }
    });

    const handleEditPost: SubmitHandler<FormInput> = (data) => {
        editPost(data);
    }

    if (isLoading) {
        return <span className="loading loading-spinner loading-md"></span>
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className='container px-0 mt-10'>
                <ButtonBack />
                <Form
                    submit={handleEditPost}
                    isEditing={true}
                    initialValues={dataPost}
                />
            </div>
        </Suspense>
    )
}
export default Edit
