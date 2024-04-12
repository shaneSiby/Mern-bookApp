import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from "../assets/bookstore.png"

const Header = () => {
  return (
  <header>
<Link to="/" className='logo' > 
<img src={logo} className='bookstore-logo' alt='ReactJs'/>
 </Link>

<nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Books">Books</NavLink>
    <NavLink to="/About">About</NavLink>

</nav>


  </header>
  )
}

export default Header