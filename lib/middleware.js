// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Cek apakah user sudah login
  const isAuthenticated = req.cookies.get('auth-token');
  
  // Jika user tidak terotentikasi dan mencoba mengakses halaman tertentu
  if (!isAuthenticated && pathname === '/protected') {
    // Redirect ke halaman login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Lanjutkan ke halaman yang diminta
  return NextResponse.next();
}
