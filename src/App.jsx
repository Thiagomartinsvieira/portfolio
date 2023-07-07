import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './assets/components/nav/nav'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  )
}

export default App
