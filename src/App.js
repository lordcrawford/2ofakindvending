import './App.css';

import React from 'react'

import { 
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Home from './components/home.js';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Contact from './components/contact.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
