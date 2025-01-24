import Link from 'next/link';
import React from 'react';

const Blogs = ({ blog }) => {
    return (
        <div className="card bg-base-100 shadow-xl">

            <div className="card-body">
                <h2 className="card-title">
                    {blog?.tilte}
                </h2>
                <p>{blog?.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`${blog?.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;