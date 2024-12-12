import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css'
import ContactBar from './components/ContactBar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ContactBar></ContactBar>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
