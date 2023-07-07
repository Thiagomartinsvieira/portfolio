import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
