import { useState } from "react";
function App() {
  const [color, setColor]=useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap shadow-lg justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("grey")} className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor:"grey"}}>grey</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full shadow-md" style={{backgroundColor:"pink"}}>pink</button>
        </div>
      </div>
    </>
  )
}

export default App
