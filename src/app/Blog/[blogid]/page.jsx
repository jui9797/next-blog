'use client'

import { useParams } from "next/navigation";

const page = () => {
    const {blogid} = useParams();
    console.log('i am coming',blogid);
    return (
        <div>
            
        </div>
    );
};

export default page;