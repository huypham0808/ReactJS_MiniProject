import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../CustomHook/useFetch";

const BlogDetail = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
   const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + id, {
         method: "DELETE",
      }).then(() => navigate("/"));
   }
   return (
      <div className="blog-detail">
         {isPending && <div>Loading...</div>}
         {error && <div>{error}</div>}
         {blog && (
            <article>
               <h2>{blog.title}</h2>
               <p>Written by: {blog.author}</p>
               <p>{blog.body}</p>
            </article>
         )}
         <button onClick={handleDelete} className="rounded-full px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Delete</button>
      </div>
   );
};

export default BlogDetail;