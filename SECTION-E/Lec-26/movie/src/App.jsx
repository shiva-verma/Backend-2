import { useState } from "react";

function App() {

  const [count, setCount] =useState(0);

  function handleIncrement(){
     setCount(count+1);
     console.log(count);
  }

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
    </>
  )
}

export default App


