import { useState } from "react";
const Home = () => {
    //Ham khong truyen tham so
    const handleClick = () => {
        console.log("Hello, Join");
    };
    //Ham co truyen tham so
    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }
    //Su dung useState
    const [name, setName] = useState("Ngan Le");
    const handleClickName = () => {
        setName('Huy Pham');
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>Name: {name}</p>
            <button className="btnClickMe" onClick={handleClickName}>Click me</button>
            <button className="btnClickMe" onClick={() => { handleClickAgain('Huy Pham') }}>Click me agian</button>
        </div>
    );
}

export default Home;