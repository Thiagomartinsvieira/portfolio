import React, { useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import './Nav.css'

function MenuItem({ href, onClick, label }) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {label}
      </a>
    </li>
  )
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <nav className="navbar">
      <div className="buttons-container">
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={handleMenuToggle}
        >
          <FaBars size={28} />
        </button>
      </div>
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <MenuItem href="#home" onClick={handleMenuLinkClick} label="Home" />
        <MenuItem
          href="#about"
          onClick={handleMenuLinkClick}
          label="About Me"
        />
        <MenuItem
          href="#projects"
          onClick={handleMenuLinkClick}
          label="Projects"
        />
        <MenuItem
          href="#contact"
          onClick={handleMenuLinkClick}
          label="Contact"
        />
        <div className="theme-toggle-container">
          <button
            onClick={handleThemeToggle}
            className="darkmode theme-toggle-button"
          >
            {isDarkTheme ? <FaSun size={28} /> : <FaMoon size={28} />}
          </button>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
