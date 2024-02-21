const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog</h1>
            <div className="links">
                <a href="/" alt="">Home</a>
                <a href="/create" alt="" style={{
                    color: 'white',
                    backgroundColor: "#087ea4",
                    borderRadius: "8px",
                    padding: "8px",
                    cursor: 'pointer'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;