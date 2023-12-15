import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../../../prisma/client";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                tagId: body.tagId
            }
        });

        return NextResponse.json(post, { status: 201 });
    } catch (err) {
        return NextResponse.json({ 'message': 'Could not create post.' }, { status: 500 });
    }
}