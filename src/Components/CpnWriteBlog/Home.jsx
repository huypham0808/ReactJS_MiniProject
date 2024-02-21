import { useState } from "react";
import { useEffect } from "react";
import BlogList from "../BlogList/BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //Su dung useEffect
    useEffect(() => {
        fetch("http://localhost:8000/blogsa")
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <p>Loading...</p>}
            {blogs && (<BlogList blogs={blogs}
                heading="All details"
                handleDelete={handleDelete} />)}
        </div>
    );
}

export default Home;