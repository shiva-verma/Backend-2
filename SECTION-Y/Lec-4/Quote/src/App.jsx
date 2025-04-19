import { useEffect, useState } from "react";

function App() {

  const [quote, setQuote] = useState({});

  
  useEffect(()=>{
    async function getRandomQuote(){
       const response =  await fetch('https://quotes-api-self.vercel.app/quote')
       const data = await response.json();
  
      setQuote(data);
    }

  },[quote])

  return (
    <>
      <div className="card">
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{quote.quote}</p>
              <footer className="blockquote-footer">
                {quote.author}
              </footer>
            </blockquote>
          </div>
        </div>

      <button onClick={getRandomQuote}>Get Random Quote</button>
    </>
  )
}

export default App
