const BlogList = ({ blogs, heading, handleDelete }) => {
   return (
      <div className="blog-list flex justify-center flex-col container mx-auto place-items-center">
         <h2 className="my-5">{heading}</h2>
         {blogs.map((blog) => (
            <div className="blog-review border-solid border-2 border-sky-500 text-left rounded-md p-5 my-5 w-96" key={blog.id}>
               <h2 style={{ fontWeight: 'bolder', fontSize: "24px", color: "#087ea4" }}>{blog.title}</h2>
               <p>Author: {blog.author}</p>
               {/* <button onClick={() => handleDelete(blog.id)} className="rounded-full px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Delete</button> */}
            </div>
         ))}
      </div>
   );
}

export default BlogList;