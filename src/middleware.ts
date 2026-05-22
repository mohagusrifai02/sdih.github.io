import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware dijalankan");
    const token = request.cookies.get("token")?.value;

    console.log("TOKEN:", token);

    if (
        !token &&
        request.nextUrl.pathname.startsWith("/dashboard")
    ) {
        console.log("REDIRECT KE LOGIN");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher : ["/dashboard/:path*", "/api/post/:path*"],
}