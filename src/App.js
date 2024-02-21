import './App.css';
import Navbar from './Components/CpnWriteBlog/Navbar';
import Home from './Components/CpnWriteBlog/Home';


function App() {
    return (
        <div className='App text-center'>
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
