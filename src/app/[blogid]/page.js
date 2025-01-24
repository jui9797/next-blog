'use client'
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const {blogid} = params;
    console.log('ai bar hoye ja',blogid);
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/posts/${blogid}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, [blogid])
    return (
        <div className='p-8 bg-gray-300 rounded-lg'>
            <h2 className='text-3xl font-bold'>Id: {post?.id}</h2>
            <h2 className='text-3xl font-medium'>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default page;