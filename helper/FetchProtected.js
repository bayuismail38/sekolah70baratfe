import { cookies } from "next/headers";
import { Fetch } from "./Helper";

async function FetchProtected(url, method="GET", body = {}, Header = {}){
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
        return await Fetch(process.env.API_URL + url, method, body, Header)
    } catch (error) {
        console.log(error)
        return
    }
}


export default FetchProtected;