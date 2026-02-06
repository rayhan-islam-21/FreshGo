import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {

        const users = await prisma.user.findMany();
        return NextResponse.json(users)

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        )
    }
}

export const POST = async (req) => {
    try {
        const body = await req.json()
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                age: body.age,
                isMarried: body.isMarried,
                nationality: body.nationality,
            }
        })

        return NextResponse.json(user, { status: 201 });


    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        )
    }
}