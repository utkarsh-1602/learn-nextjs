import { NextRequest, NextResponse } from "next/server"

export async function GET(NextRequest: any, NextResponse: any) {
    return NextResponse.json({ message: "Hey Utkarsh" }, { status: 201 })
}   
