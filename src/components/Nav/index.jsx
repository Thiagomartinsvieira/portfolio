import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <FaBars size={28} />
      </button>
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={handleMenuLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleMenuLinkClick}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleMenuLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenuLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
