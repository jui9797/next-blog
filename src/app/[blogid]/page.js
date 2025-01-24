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
        <div>
            <h2 className='text-3xl font-bold'>{post?.title}</h2>
        </div>
    );
};

export default page;