import FetchProtected from "@/helper/FetchProtected";
import axios from "axios";
import { NextResponse } from "next/server";
import https from 'https';

export const GET = async () => {
    try {
        const createHttpsAgent = () => {
            return new https.Agent({
              rejectUnauthorized: false,
            });
          };
          const axiosConfig = {
            httpsAgent: createHttpsAgent(), // Gunakan HTTPS agent dengan konfigurasi
          };
        const data = await axios.get(process.env.API_URL + "Angkatan", axiosConfig)
        return NextResponse.json(data.data)
    } catch (error) {
        return NextResponse.json({statusCode:error.message})
    }
}