import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import NavBar from './components/Common/NavBar'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
