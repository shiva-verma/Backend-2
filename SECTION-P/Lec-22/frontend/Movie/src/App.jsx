import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
        <Navbar/>   
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </>

  )
}

export default App
