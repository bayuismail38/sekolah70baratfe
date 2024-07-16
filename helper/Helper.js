import https from "https";
import axios from "axios";

async function Fetch(url, contentType = [], body = {}) {
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
    if(contentType.length > 0){
        axiosConfig.headers["Content-Type"].push(contentType)
    }
    const apiResponse = await axios.post(`${process.env.API_URL + url}`, urlParams.toString(), axiosConfig);

    const data = apiResponse.data;
    return data;
}
const MappToUrl = (data) => {
    var forms = new URLSearchParams()
    for (const loop in data) {
        forms.append(loop, data[loop])
    }
    return forms;
}
export {
    Fetch,
    MappToUrl
}