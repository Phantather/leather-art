// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    response.headers.set('Accept-Ranges', 'none');
    response.headers.set('Cache-Control', 'public, max-age=3600');
    return response;
}
