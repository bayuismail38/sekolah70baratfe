import https from "https";
import axios from "axios";
import { cookies } from "next/headers";

async function Fetch(url, contentType = [], body = {}, Header = {}) {
    const createHttpsAgent = () => {
        return new https.Agent({
          rejectUnauthorized: false,
        });
      };
   
    const axiosConfig = {
        httpsAgent: createHttpsAgent(), // Gunakan HTTPS agent dengan konfigurasi
        headers: {
            'Content-Type': [],
        },
    };
    var urlParams = new URLSearchParams;
    for (const iterator in body) {
        urlParams.append(iterator, body[iterator]);
    }
    for (const iterator in Header) {
        axiosConfig.headers[iterator] = Header[iterator];
    }
    if(contentType.length > 0){
        axiosConfig.headers["Content-Type"].push(contentType)
    }
    const apiResponse = await axios.post(`${url}`, urlParams.toString(), axiosConfig);

    const data = apiResponse.data;
    return data;
}

async function FetchProtected(url, contentType = [], body = {}, Header = {}){
    try {
        let dataCookies = cookies().get("Authorization");
        if (typeof dataCookies == 'undefined' || dataCookies == "" || dataCookies == null) {
            throw "Token Cookies Error"
        }
        let crypt = JSON.parse(Crypto.AES.decrypt(dataCookies.value, process.env.HASH_CODE));
        if (typeof crypt.token == 'undefined') {
            throw "Token Error"
        }
        Header["Authorization"] = crypt.token;
        return await Fetch(process.env.API_URL + url, contentType, body, Header)
    } catch (error) {
        console.log(error)
    }
}

async function FetchLocal(url, contentType = [], body = {}, Header = {}){
    try {
        return await Fetch(process.env.API_LOCAL_URL + url, contentType, body, Header)
    } catch (error) {
        console.log(error)
    }
}
const MappToUrl = (data) => {
    var forms = new URLSearchParams()
    for (const loop in data) {
        forms.append(loop, data[loop])
    }
    return forms;
}
export {
    FetchLocal,
    MappToUrl,
    FetchProtected
}