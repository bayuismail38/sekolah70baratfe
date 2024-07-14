import axios from 'axios';
import { Crypto } from "cryptojs";
import { NextResponse } from 'next/server'
import { Fetch } from './helper/Helper';
import { cookies } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    if (cookies().has('Authorization')) {
      var dataCookies = cookies().get('Authorization');
      try {
        var crypt = JSON.parse(Crypto.AES.decrypt(dataCookies.value, process.env.HASH_CODE));
        // request.cookies.set("Refresh-Token", new Date.now() + (1000 * 60 * 15))
        // if (typeof crypt.time == 'undefined') {
        //   throw "token error";
        // }
        if (typeof crypt.token == 'undefined') {
          throw "token error";
        }
        if (typeof crypt.refreshToken == 'undefined') {
          throw "refresh token error";
        }
        const data = crypt
        // // if (new Date.now() < parseFloat(crypt.time)) {
        // //   const getData = await Fetch('Auth/Refresh', ["application/x-www-form-urlencoded"]);
        // //   if (getData.statusCode == 200) {
        // //     const Cookies = {
        // //       Email: data[process.env.EMAIL_URL],
        // //       Token: data.token,
        // //       RefreshToken: data.refreshToken
        // //     }
        // //     cookies().set("Authorization", Crypto.AES.encrypt(JSON.stringify(Cookies), process.env.HASH_CODE))
        // //   }else{
        // //     throw "Something went wrong";
        // //   }
        // }
        return NextResponse.next()
      } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));        
      }
    }
    return NextResponse.redirect(new URL('/login', request.url));        
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home','/home/:path*'],
}