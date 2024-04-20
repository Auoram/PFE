'use client'
import React, { useState} from 'react'

function Slidebutton() {
    const [mode, setMode] = useState("yes");

    const toggleMode = () => {
        setMode(mode === "yes" ? "no" : "yes");
    };
  return (
    <div className="relative w-36 h-12 border-2 rounded-none flexBetween gap-x-4">
        <div className={`regular-14 ${mode === "yes" ? 'text-red-500' : 'text-blue-40'} ml-4 cursor-pointer`} onClick={() => setMode("yes")}>Yes</div>
        <div className={`regular-14 ${mode === "no" ? 'text-blue-40' : 'text-red-500'} mr-4 cursor-pointer`} onClick={() => setMode("no")}>No</div>
        <div className="w-20 absolute h-12 rounded-xl bg-gray-300 cursor-pointer" style={mode === "yes" ? { right: "1px" } : { left: "1px" }} onClick={toggleMode} />
    </div>
  )
}

export default Slidebutton