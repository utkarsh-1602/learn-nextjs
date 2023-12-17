import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, response: NextResponse) {
    return NextResponse.json({ message: "Hey Utkarsh" }, { status: 201 })
}   
