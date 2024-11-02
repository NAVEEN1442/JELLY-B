import React from 'react'
import Navbar from '../components/Navbar'
import LeftHomePage from '../components/LeftHomePage'
import RightHomePage from '../components/RightHomePage'
import { NavLink } from 'react-router-dom'

function HomePage() {

  return (
    <div className=' p-3 h-screen w-full ' >

      <Navbar/>

      <LeftHomePage/>

      <RightHomePage/>

      <div className=' w-[100%] h-[100px] flex items-center justify-center  ' > 
                
                <NavLink to="/services" >
                  <button className=' w-[200px] tracking-[2px] h-[60px] bg-[#DB4B4B] rounded-[20px] border-2 ' >GET STARTED</button>
                </NavLink>
      </div>


    </div>
  )
}

export default HomePage