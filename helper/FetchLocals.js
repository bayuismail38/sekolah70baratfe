import { Fetch } from "./Helper";

async function FetchLocal(url, method= "GET", body = {}){
    try {
        const data = await Fetch(process.env.API_LOCAL_URL + url, method, body);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export default FetchLocal;