import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import Submit from './pages/submit';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        < Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/submit' element={<Submit />} />
            
        </Routes>
    </Router>
  );
}

export default App;
