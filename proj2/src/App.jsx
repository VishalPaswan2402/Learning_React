import { useState ,useCallback, useEffect, useRef} from "react"

function App() {
  const [length , setLength]=useState(8);
  const [numAll,setNumAll]=useState(false);
  const [useChar,setUseChar]=useState(false);
  const [password,setPassword]=useState("");
  const passRef=useRef(null);
  const passGenerator=useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if(numAll) str+="0123456789";
    if(useChar) str+="!@#$%^&*(){}[]_-+";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numAll,useChar,setPassword]);

  const copyPassToBoard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{passGenerator()},[length,numAll,useChar,passGenerator])

  return (
    <>
      <div className="text-4xl bg-grey-800 text-center">Password Generator</div>
      <div className="w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-800 rounded-lg">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} placeholder="Password" className="rounded-lg outline-none w-full py-1 px-3" readOnly ref={passRef}></input>
          <br></br>
          <button onClick={copyPassToBoard} className="shrink-0 py-0.5 px-3 text-white bg-blue-500">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length: {length}</label>
            <input type="checkbox" defaultChecked={numAll} onChange={()=>{setNumAll((prev)=>!prev)}}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked={useChar} onChange={()=>{setUseChar((prev)=>!prev)}}></input>
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
