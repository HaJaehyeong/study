import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('start');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/about/:path*',
};
