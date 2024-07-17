import { Fetch } from "./Helper";

async function FetchLocal(url, method= "GET", contentType = [], body = {}, Header = {}){
    try {
        return await Fetch(process.env.API_LOCAL_URL + url, method, contentType, body, Header)
    } catch (error) {
        console.log(error)
    }
}

export default FetchLocal;