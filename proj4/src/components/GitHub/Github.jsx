import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(props) {
    const data = useLoaderData()
    // const [data , setData]=useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/VishalPaswan2402')
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data);
//             setData(data)
// ;        })
//     },[])

    return (
        <>
            <h1>Git followers : {data.followers}</h1>
            <img src={data.avatar_url} alt='Git Picture' width={300}></img>
        </>
    )
}


export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/VishalPaswan2402');
    return response.json();
}