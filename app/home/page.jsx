import axios from 'axios';
import React from 'react';
import https from 'https';
import { Fetch } from '@/helper/Helper';
import FetchLocal from '@/helper/FetchLocals';


async function getData() {
  const data = await FetchLocal('api/angkatan', "GET", {name:"bayu"});
  return data;
}
async function page() {
  let data = await getData();
  console.log(data)
  return (
     <div></div>
  )
}

export default page