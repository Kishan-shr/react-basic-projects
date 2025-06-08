import { useState } from 'react'

import './App.css'

function App() {
  console.log("App render",Math.random())
  const [value, setValue] = useState({
    value:0,
  })
  

  const click = () =>{
setValue({
  value:0
})
  }

  return (
    <>
    {/* this helps to render as many times as required this does not react it use basic js concept pass by value and pass by reference */}
     <h1>Main value : {value.value}</h1> 
     <button
     onClick={click}
     >Click to multiple by 5</button>
    </>
  )
}

export default App
