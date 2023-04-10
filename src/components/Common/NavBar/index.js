import { useState } from 'react'
import React from 'react'
import './style.css'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function NavBar() {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Nav Bar
      </Link>
      <div onClick={handleClick} className="nav-icons">
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
