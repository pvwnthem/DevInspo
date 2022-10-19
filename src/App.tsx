import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        < Navbar />
        <Routes>
            <Route path='/w' element={<Home />} />
            
        </Routes>
    </Router>
  );
}

export default App;
