import {Tag} from ".prisma/client";

export interface FormInput {
    title: string,
    content: string,
    tagId: string
}