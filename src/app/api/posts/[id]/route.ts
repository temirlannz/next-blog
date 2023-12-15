import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../../../prisma/client";

interface contextProps {
    params: {
        id: string
    }
}

export async function DELETE(request: NextRequest, context: contextProps) {
    try {
        const { params } = context;

        await prisma.post.delete({
            where: {
                id: params.id
            }
        });

        return new Response(null, { status: 204 });
    } catch (err) {
        return NextResponse.json({ error: 'Could not delete post.' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest, context: contextProps) {
    try {
        const { params } = context;
        const body = await request.json();

        await prisma.post.update({
            where: {
                id: params.id
            },
            data: {
                title: body.title,
                content: body.content,
                tagId: body.tagId
            }
        });

        return NextResponse.json({ message: 'Updated successfully.' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ 'message': 'Could not delete post.' }, { status: 500 });
    }
}

export async function GET(request: NextRequest, context: contextProps) {
    try {
        const { params } = context;
        const post = await prisma.post.findFirst({
            where: {
                id: params.id
            },
            include: {
                tag: true
            }
        })

        return NextResponse.json(post, { status: 200 });
    } catch (err) {
        return NextResponse.json({ 'message': 'Could not find post.' }, { status: 500 });
    }
}