
import { useEffect, useState } from 'react';
import React   from 'react'
import Container from './Container';

const Body = () => {
  const [data,setData] = useState();
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const body = JSON.stringify({
  "limit": 1000,
  "offset": 0
 });
 
 const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body
 };
    async function Api(){
      const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      return data.json()
     
      .then(data=>{
      console.log(data);
      setData(data?.jdList);
      
      })
    }
    useEffect(()=>{
    Api();
    },[]);


  return (
    <div>
      {data?.map((item)=>{
      return <Container {...item} key={item?.jdUid} />
      })}
    </div>
  )
}
export default Body