import Blogs from "@/components/Blogs";

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await res.json();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {
        blogs?.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
      }
    </div>
  );
};

export default page;