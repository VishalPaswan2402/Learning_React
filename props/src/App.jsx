import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    user:"Vis",
    age:22
  }
  let newArr=[1,2,3,4];

  return (
    <>
      <h1 className='bg-blue-950 font-bold text-blue-600 p-4 rounded-xl'>Tailwind</h1>
      <Card channel='Chai' btnTxt='Click Me'/>
      <Card channel='ChaiAurCode' btnTxt='Visit Me'/>
    </>
  )
}

export default App
