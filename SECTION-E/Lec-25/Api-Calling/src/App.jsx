import { useEffect, useState } from "react"

function App() {
  const API = 'https://jsonplaceholder.typicode.com/comments'
  const [users,setUsers] =useState([]);
  useEffect(()=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
  },[])
  return (
    <>
      <div>
        <h1>Post</h1>
        <ul>
          {users.map((user)=>(
            <li>{user.name}</li>
            
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
