import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" bg-green-500 align-center p-4 rounded-xl mb-4" >Cart component </h1>
<Card username = "cdn" btnText ="explore more"/>
<Card username="cdn2"  />
    </>
  )
}

export default App
