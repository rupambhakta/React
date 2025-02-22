import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData(githubInfoLoader)

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rupambhakta')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data), console.log(data);
    //         })

    // }, [])
    return (
        <div className='text-center text-4xl py-5 bg-gray-600 text-bold text-white'>
            <h1 className='my-5 text-5xl text-green-400'>GitHub page</h1>
            <img src={data?.avatar_url} alt='avatar' className='rounded-full w-40 h-40 mx-auto' />
            <div className='flex flex-col gap-3'>
                <h2><span className='text-green-400 text-5xl'>Name</span> : {data.name}</h2>
                <h2><span className='text-green-400 text-5xl'>Followers</span> : {data.followers}</h2>
                <h2><span className='text-green-400 text-5xl'>Public Repository</span> : {data.public_repos}</h2>

            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/rupambhakta')
    return response.json()
}