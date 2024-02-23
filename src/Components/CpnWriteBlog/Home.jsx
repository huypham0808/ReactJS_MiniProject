import BlogList from "../BlogList/BlogList";
import useFetch from "../CustomHook/useFetch";
const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <p>Loading...</p>}
            {blogs && (<BlogList blogs={blogs}
                heading="All details" />)}
        </div>
    );
}

export default Home;