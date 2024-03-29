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

  const saveThemePreference = (isDark) => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDark))
  }

  const handleThemeToggle = () => {
    const newIsDarkTheme = !isDarkTheme
    setIsDarkTheme(newIsDarkTheme)
    saveThemePreference(newIsDarkTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('isDarkTheme')
    if (storedTheme) {
      setIsDarkTheme(JSON.parse(storedTheme))
    }
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme ? '#222222' : '#ffffff'
  }, [isDarkTheme])

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <BrowserRouter>
        <Nav handleThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
        <Home handleThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
