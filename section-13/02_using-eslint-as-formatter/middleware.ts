import { NextRequest } from 'next/server';

export default function middleware (request: NextRequest) {
  if (!request.cookies.get('authjs.session-token')) {
    console.log('Returned from the Middleware...');
    return Response.redirect(new URL('/login', request.nextUrl.origin));
  }
}

export const config = {
  matcher: ['/', '/profile'],
};
