import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
