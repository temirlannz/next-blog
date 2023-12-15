import {NextResponse} from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
    try {
        const tags = await prisma.tag.findMany();

        return NextResponse.json(tags, { status: 200 });
    } catch (err) {
        return NextResponse.json({ 'message': 'Error fetch tags.' }, { status: 500 });
    }
}