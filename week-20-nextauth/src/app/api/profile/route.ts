import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "This is a profile page"
    })
}