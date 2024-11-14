import React from 'react'

export function Card(props) {
    
console.log(props);
    return (
        <>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
  <div className="flex items-center p-4">
    <div className="bg-blue-100 p-3 rounded-full">
      <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800">{props.channel}</h3>
      <p className="text-gray-600">Short description goes here.</p>
    </div>
  </div>
  <div className="flex justify-between p-4 bg-gray-100">
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Cancel</button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{props.btnTxt || "click me"}</button>
  </div>
</div>
        </>
    )
}
