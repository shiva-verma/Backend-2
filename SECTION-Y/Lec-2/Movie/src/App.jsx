import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"

function App() {

  //useState hook
  const [count , setCount] = useState(0);

  function handleIncrement(){
    setCount(count + 1)
  }

  function handleDecrement(){
    setCount(count - 1)
  }

  useEffect(()=>{
    console.log(`this time counter value is ${count}`)
  },[count])

  return (
    <>
      <h1>HELLO WORLD</h1>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default App
