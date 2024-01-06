import { NextResponse, NextRequest } from "next/server"

export const GET = async (NextRequest: any, NextResponse: any) => {
    console.log("Dynamic GET")
    return NextResponse.json({ message: "Dynamic Route" }, { status: 200 })
}
