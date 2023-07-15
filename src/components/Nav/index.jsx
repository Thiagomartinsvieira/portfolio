import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import './Nav.css'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleMenuItemClick)
    console.log('adiciona')

    return () => {
      document.removeEventListener('click', handleMenuItemClick)
      console.log('remove')
    }
  }, [])

  return (
    <nav
      className={`navbar fixed navbar-container ${isMenuOpen ? 'open' : ''}`}
    >
      <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={handleMenuToggle}
      >
        <FaBars size={28} />
      </button>
      <ul className={`menu-list ${isMenuOpen ? '' : 'hidden'}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
