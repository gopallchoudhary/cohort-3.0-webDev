import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const {username, email, password} = reqBody

    await prismaClient.user.create({
        data: {
            username,
            email,
            password
        }
    })




    return NextResponse.json({
        success: true, 
        message: "user signed successfully"
    })
}