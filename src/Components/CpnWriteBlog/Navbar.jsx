import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CSS CAD Library</h1>
            <div className="links">
                <Link to="/" alt="">Home</Link>
                <Link to="/create" alt="" style={{
                    color: 'white',
                    backgroundColor: "#087ea4",
                    borderRadius: "8px",
                    padding: "8px",
                    cursor: 'pointer'
                }}>New details</Link>
            </div>
        </nav>
    );
}

export default Navbar;