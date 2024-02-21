import { useState } from "react";
import BlogList from "../BlogList/BlogList";
const Home = () => {
    //Ham khong truyen tham so
    /*const handleClick = () => {
        console.log("Hello, Join");
    };*/
    //Ham co truyen tham so
    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }
    //Su dung useState
    const [name, setName] = useState("Ngan Le");
    const handleClickName = () => {
        setName('Huy Pham');
    }
    //Tao blog
    const [blogs, setBlog] = useState([
        {
            title: "Detail 1",
            body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
            author: "john",
            id: 1,
        },
        {
            title: "Detail 2",
            body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
            author: "andrew",
            id: 2,
        },
        {
            title: "Detail 3",
            body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
            author: "maria",
            id: 3,
        },
        {
            title: "Detail 4",
            body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
            author: "maria",
            id: 3,
        },
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlog(newBlogs);
    };
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>Name: {name}</p>
            <button className="btnClickMe" onClick={handleClickName}>Click me</button>
            <button className="btnClickMe" onClick={() => { handleClickAgain('Huy Pham') }}>Click me agian</button>
            <BlogList blogs={blogs} heading="All Details" handleDelete={handleDelete} />
            <hr className="container mx-auto" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "maria")} heading="Maria's Details" />
        </div>
    );
}

export default Home;