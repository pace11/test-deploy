import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const session = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET! })
  const privatePath = ['/profile', '/about', '/file']

  if (privatePath.includes(pathname) && !session) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/file/:path*', '/about/:path*', '/profile/:path*'],
}
