import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const addValue=()=>{
    counter=counter+1;
    if(counter<=20){
      setCounter(counter);
    }
    else{
      counter=20;
      setCounter(counter);
    }
  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter>=0){
      setCounter(counter);
    }
    else{
      counter=0;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter value</h1>
      <h2>Current value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
