import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Product from '../Components/Product';
import Register from '../Components/Register';

const Routing = () => {
  return (
  <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routing
