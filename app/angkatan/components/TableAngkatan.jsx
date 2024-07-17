import https from 'https';
import React from 'react';
import axios from 'axios';



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



async function TabelAngkatan() {
    let data = await getData();
    let loop = data.data.data;
    console.log(loop)

    return (
        <div class="card">
            <div class="card-header">
                <h5 class="card-title text-xl font-medium">Tabel Angkatan</h5>
            </div>
            <div class="card-body">
                <div class=" relative overflow-x-auto sm:rounded-lg">
                    <table class="table table-striped w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-base text-gray-700 uppercase border-b">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tahun
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {loop.map((el, index) => {
                                return (
                                    <tr key={index} class=" border-b">
                                        <td class="px-6 py-4">
                                            {index + 1}
                                        </td>
                                        <td class="px-6 py-4">
                                            {el.name}
                                        </td>
                                        <td class="px-6 py-4">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                )

                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TabelAngkatan