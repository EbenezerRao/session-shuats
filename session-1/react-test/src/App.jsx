import './App.css'
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  async function clickHandler() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const dataToJson = await data.json()
        setData(dataToJson)
  }
  return (
    <>
      <button onMouseEnter={clickHandler} onMouseLeave={() => setData("")}>Click</button>
      <Container data={data} />
    </>
  )
}

function Container({data}) {
  return <div id="container">{JSON.stringify(data)}</div>
}

export default App