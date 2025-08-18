import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img  src={logo} alt="" className='logo' />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Campus</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
