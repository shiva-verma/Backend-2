import { useEffect, useState } from "react";

function App() {
  
  const[imageData, setImageData] = useState([])

  useEffect(()=>{
      async function fetchData(){
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data1 = await data.json();
        console.log(data1)
        setImageData(data1);

      }
    fetchData();
  }, [])

  return (
    <>
      <div>
        {imageData.map((val)=>(
          <div className="card" style={{ width: "18rem" }}>
          <img src= {val.thumbnailUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">
              {val.albumId}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        
        ))}
      </div>
    </>
  )
}

export default App
