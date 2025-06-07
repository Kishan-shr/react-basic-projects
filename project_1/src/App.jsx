import { useState } from 'react'

import './App.css'

function App() {
const [value, setValue] = useState(1)
// const [multipliedValue , setMultipliedValue] =  useState(1)   // this can be done using variables 
//second method holding in variable
let multipliedValue = value *5
const multipliedbyfive =()=>{
// setMultipliedValue(value*5)
setValue(value + 1)
}
  return (
    <>
   <h1> Multiplier:{value}</h1>
   <button
   onClick={multipliedbyfive}
   >
    Click to multiple by 5</button>
   <h1>Multiplied value:{multipliedValue}</h1>
    </>
  )
}

export default App
