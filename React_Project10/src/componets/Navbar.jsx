import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom'
import  './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
