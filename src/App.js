import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Feature from './Component/Feature';
import Price from './Component/Price';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
       <Router>
      <Navbar />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Feature />} />
                <Route path="/pricing" element={<Price />} />
                
      </Routes>
       </Router>
  );
}

export default App;
