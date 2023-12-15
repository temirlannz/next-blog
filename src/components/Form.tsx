'use client';

import {SubmitHandler, useForm} from "react-hook-form";
import {FC} from "react";
import {FormInput} from "@/types";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Tag} from ".prisma/client";

interface FormProps {
    submit: SubmitHandler<FormInput>
    isEditing: boolean
    initialValues?: FormInput
}

const Form: FC<FormProps> = ({ submit, isEditing, initialValues }) => {
    const {
        register,
        handleSubmit
    } = useForm<FormInput>({ defaultValues: initialValues });

    const { data: tags, isLoading } = useQuery<Tag[]>({
        queryKey: ['tags'],
        queryFn: async () => {
            const response = await axios.get('/api/tags');

            return response.data;
        }
    });

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className='flex flex-col items-center justify-center gap-2'
        >
            <input
                type="text"
                {...register('title', { required: true })}
                placeholder="Title"
                className="input input-bordered w-full max-w-lg"
            />

            <textarea
                className="textarea textarea-bordered w-full max-w-lg"
                {...register('content', { required: true })}
                placeholder="Content">
            </textarea>

            {isLoading
                ? <span className="loading loading-spinner loading-md"></span>
                : (
                    <select
                        {...register('tagId', { required: true })}
                        className="select select-bordered w-full max-w-lg"
                        defaultValue={''}>

                        <option disabled value=''>Select tags</option>

                        {tags?.map(tag => (
                            <option
                                value={tag.id}
                                key={tag.id}
                            >
                                {tag.name}
                            </option>
                        ))}
                    </select>
                )}

            <button type='submit' className='btn w-full max-w-lg'>
                { isEditing ? 'Edit' : 'Create' }
            </button>
        </form>
    )
}
export default Form
