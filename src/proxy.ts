import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

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