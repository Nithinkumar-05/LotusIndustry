import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css'
import ContactBar from './components/ContactBar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
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
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
