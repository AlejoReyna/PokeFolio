import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Projects" element={<Projects/> } />
      </Routes>
     
    </Router>
  );
}

export default App;
