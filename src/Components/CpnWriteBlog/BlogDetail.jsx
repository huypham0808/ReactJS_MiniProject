import { useParams } from "react-router-dom";
import useFetch from "../CustomHook/useFetch";

const BlogDetail = () => {
   const { id } = useParams();
   const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
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
      </div>
   );
};

export default BlogDetail;