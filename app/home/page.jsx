import axios from 'axios';
import React from 'react';
import https from 'https';


async function getData() {
  const createHttpsAgent = () => {
    return new https.Agent({
      rejectUnauthorized: false,
    });
  };
  const axiosConfig = {
    httpsAgent: createHttpsAgent(), // Gunakan HTTPS agent dengan konfigurasi
  };
  return await axios.get(process.env.API_LOCAL_URL + "api/angkatan", axiosConfig)
}
async function page() {
  let data = await getData();
  let loop = data.data.data;
  console.log(loop)
  return (
      <div>
        {loop.map((el) => {
          return <div>{el.name}</div>
        })}
      </div>
  )
}

export default page