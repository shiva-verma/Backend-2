import React, { useEffect, useState } from 'react'

const Home = () => {
  
  const [data, setData] = useState(0);

  useEffect(()=>{

    async function getData(){
      const value = await fetch('https://jsonplaceholder.typicode.com/albums');
      const value1 = await value.json();
      console.log(value1)
      setData(value1);
    }
    getData();
  }, [])

  return (
    <div>
      {/* {data.map((d)=>(
          <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">{d.title}</h5>
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>
      ))} */}
      <h1>hello</h1>
    </div>
  )
}

export default Home