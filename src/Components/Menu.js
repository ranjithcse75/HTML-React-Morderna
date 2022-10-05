import React from 'react'
import { Link } from 'react-router-dom'
function Menu() {
  return (
<nav id="navbar" className="navbar">
      <ul>
        <li><Link  className=" " to="/">Home</Link></li>
        <li><Link  to="/about">About</Link></li>
        <li><Link  to="/services">Services</Link></li>
        <li><Link  to="/portfolio">Portfolio</Link></li>
        <li><Link  to="/team">Team</Link></li>
        <li><Link  to="/blog">Blog</Link></li>     
        <li><Link  to="/contact">Contact Us</Link></li>     
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  )
}

export default Menu




