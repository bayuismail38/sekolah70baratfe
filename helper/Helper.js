import https from "https";
import axios from "axios";

async function Fetch(url, method = "GET", contentType = [], body = {}, Header = {}) {
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
    let apiResponse = "";
    if (method == "GET") {
        apiResponse = await axios.get(`${url}`, urlParams.toString(), axiosConfig);
    }else{
        apiResponse = await axios.post(`${url}`, urlParams.toString(), axiosConfig);
    }

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
    MappToUrl,
    Fetch
}