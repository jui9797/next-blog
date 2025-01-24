import Blogs from "@/components/Blogs";

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <div>
      {
        blogs?.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
      }
    </div>
  );
};

export default page;