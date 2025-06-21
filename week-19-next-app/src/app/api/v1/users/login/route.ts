import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma from "@/db/db";
const prismaClient = new PrismaClient()

export async function POST(request: NextRequest) {
    const reqBody = await request.json()
    const { email, password } = reqBody

    const user = prisma.user.findFirst({
        where: {
            email
        }, 
        select: {
            email,
            password
        }
    })

    if(!user) {
        return NextResponse.json({
            succees: false, 
            message: "User not found! try login again"
        })
    }
}