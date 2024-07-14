"use server"
import axios from "axios";
import { Crypto } from "cryptojs";
import https from "https";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const createHttpsAgent = () => {
  return new https.Agent({
    rejectUnauthorized: false, // Nonaktifkan penolakan sertifikat (tidak disarankan untuk produksi)
    // Atau tambahkan sertifikat self-signed ke CA jika diperlukan
  });
};
export const POST = async (req, response) => {
  try {
    const { Email, Password } = await req.json();
    const formData = new URLSearchParams();
    formData.append('Email', Email);
    formData.append('Password', Password);

    const axiosConfig = {
      httpsAgent: createHttpsAgent(), // Gunakan HTTPS agent dengan konfigurasi
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const apiResponse = await axios.post(`${process.env.API_URL}Auth/Login`, formData.toString(), axiosConfig);

    const data = apiResponse.data;
    const dataEncypt = Crypto.AES.encrypt(JSON.stringify(data.data), `${process.env.HASH_CODE}`);
    // const dataDecrypt = Crypto.AES.decrypt(dataEncypt, `${process.env.HASH_CODE}`);
    // console.log(dataDecrypt)
    cookies().set("Authorization", dataEncypt)
    return NextResponse.json({"statusMessage" : "success"}, response)
  } catch (error) {
    console.error('Error:', error.message);
    // NextResponse.error()
    return NextResponse.json({ message: 'Internal Server Error' }, response)

    // response.status(500).json(data)
  }
}