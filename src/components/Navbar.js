import React from 'react'
import logo from "../assets/logo.png"


function Navbar() {
  return (
    <div className=' w-[100%]  flex items-center h-[60px] ' >
            <img className=' h-[100%] w-[80px] ' src={logo} />
            <p className=' font-extrabold text-[40px] text-[#a29797] ' >JELLY-B</p>

    </div>
  )
}

export default Navbar