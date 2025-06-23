export const middleware = (request) => {
  if (request.cookies.get("sid")) {
    if (
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register"
    ) {
      return Response.redirect(new URL("/", request.nextUrl.origin));
    }
  } else if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/login", request.nextUrl.origin));
  }
};

export const config = {
  matcher: ["/", "/login", "/register"],
};
