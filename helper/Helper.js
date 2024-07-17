import https from "https";
import axios from "axios";

async function Fetch(url, method = "GET", body = {}, Header = {}) {
    const createHttpsAgent = () => {
        return new https.Agent({
          rejectUnauthorized: false,
        });
      };
   
    const axiosConfig = {
        httpsAgent: createHttpsAgent(), // Gunakan HTTPS agent dengan konfigurasi
    };
    var urlParams = new URLSearchParams;
    for (const iterator in body) {
        urlParams.append(iterator, body[iterator]);
    }

    
    if (Object.keys(Header) > 0) {
        for (const iterator in Header) {
            axiosConfig.header[iterator] = Header[iterator]
        }
    }
 
    let apiResponse = "";
    if (method.toLowerCase() == "get") {
        apiResponse = await axios.get(`${url}`, urlParams.toString(), axiosConfig);
    }else if (method.toLowerCase() == 'post') {
        axiosConfig.header["Content-Type"] = "application/x-www-form-urlencoded"
        apiResponse = await axios.post(`${url}`, urlParams.toString(), axiosConfig);    
    }else if(method.toLocaleLowerCase() == 'delete'){
        apiResponse = await axios.delete(`${url}`, urlParams.toString(), axiosConfig);    
    }else if(method.toLocaleLowerCase() == 'put'){
        axiosConfig.header["Content-Type"] = "application/x-www-form-urlencoded"
        apiResponse = await axios.put(`${url}`, urlParams.toString(), axiosConfig);    
    }else{
        throw "method didnt compatible"
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