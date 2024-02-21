import { useState } from "react";
import { useEffect } from "react";
import BlogList from "../BlogList/BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    //Su dung useEffect
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => { setBlogs(data) })
    }, []);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    return (
        <div className="home">
            {blogs && (<BlogList blogs={blogs}
                heading="All details"
                handleDelete={handleDelete} />)}
        </div>
    );
}

export default Home;