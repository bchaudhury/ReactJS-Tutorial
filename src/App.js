// /* import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Includes/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (

  <Router>
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  </Router>
  );
}

export default App;
