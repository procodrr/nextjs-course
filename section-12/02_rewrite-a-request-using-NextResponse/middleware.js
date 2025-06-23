import { NextResponse } from "next/server";

export const middleware = (request) => {
  return NextResponse.rewrite(new URL("/", request.nextUrl.origin));
};

export const config = {
  matcher: ["/home"],
};
