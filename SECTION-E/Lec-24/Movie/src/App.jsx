import About from "./Components/About"
import Home from "./Components/Home"
import { Navbar } from "./Components/Navbar"
import {Routes, Route} from 'react-router'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
