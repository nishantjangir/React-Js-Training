import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h2 className='logo'>NISKART</h2>

<ul>
    <li><Link to="/" className='one'>Home</Link></li>
    <li><Link to="/product" className='one'>Product</Link></li>
    <li><Link to="/about" className='one'>About</Link></li>
    <li><Link to="/contact" className='one'>Contact</Link></li>
</ul>

<Link to="/register" className='second'>Register</Link>
    </nav>
  )
}

export default Navbar
