import Link from "next/link";


const Blog = ({ blog }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">

            <div className="card-body">
                <h2 className="card-title">
                    {blog?.tilte}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link href={`/${blog?.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;