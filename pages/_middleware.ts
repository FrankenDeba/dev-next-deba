import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: any, ev: any) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}
