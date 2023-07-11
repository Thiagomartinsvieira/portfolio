import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
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
