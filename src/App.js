import './App.css';
import Navbar from './Components/CpnWriteBlog/Navbar';
import Home from './Components/CpnWriteBlog/Home';
import Creat from './Components/CpnWriteBlog/Creat';
import BlogDetail from './Components/CpnWriteBlog/BlogDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className='App text-center'>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<Creat />} />
                        <Route path='/blogs/:id' element={<BlogDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
