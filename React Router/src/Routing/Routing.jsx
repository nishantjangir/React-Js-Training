import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'



import React from 'react'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
       
      </Routes>
    </BrowserRouter>
  )
}

export default Routing

 