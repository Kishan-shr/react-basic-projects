import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter , setCounter]= useState(15)
// let counter =10
const addValue =()=>{
  if(counter < 20){
    // counter = counter + 1
    console.log("counter", counter)
    setCounter(counter = counter+1)
    // for interview
    // setCounter(preCounter => preCounter+1)
    // setCounter(preCounter => preCounter+1)
    // setCounter(preCounter => preCounter+1)
    // setCounter(preCounter => preCounter+1)
    // setCounter(preCounter => preCounter+1)

  }
}
const removeValue =()=>{
  if(counter >0){
    // counter = counter -1
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
  }
}

  return (
    <>
    <h1> React counter App</h1>
    <h2>Counter value:${counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
