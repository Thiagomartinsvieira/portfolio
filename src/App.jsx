import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // Defina a cor de fundo do body com base no tema atual
  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme ? '#333333' : '#ffffff'
  }, [isDarkTheme])

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <BrowserRouter>
        <Nav handleThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
