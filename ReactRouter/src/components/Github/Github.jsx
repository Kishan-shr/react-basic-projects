import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { data } from "react-router-dom";
function Github(){
    // 1st method to fetch api 

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/kishan-shr`)
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData([])
    return(
        <div className="flex flex-row-reverse justify-center gap-5 mt-5  text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers :{data.followers}
         <img src= {data.avatar_url} alt="Git Picture" width={100} className='rounded-lg flex'/>
        </div>
       
    )
}
export default Github

//this not god way of writing for loader but make separate file for it 
//this second method using loader which help to prefetch the data before clicking
export const githubInfoLoader = async ()=>{
 const response = await fetch('https://api.github.com/users/kishan-shr')
 return response.json()
}