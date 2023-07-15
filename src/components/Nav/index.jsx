import { useEffect } from 'react'
import './Nav.css'

const menuToggle = document.querySelector('.menu-toggle')
const menuList = document.querySelector('.menu-list')

menuToggle.addEventListener('click', function () {
  menuList.classList.toggle('active')
})

function Nav() {
  useEffect(() => { }, [])

  return (
    <nav className="navMenu fixed menu-hamburguer">
      <button className="menu-toggle">
        <span className="hamburguer-icon" />
      </button>
      <ul className="menu-list">
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
