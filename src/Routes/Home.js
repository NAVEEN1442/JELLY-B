import React from 'react'

import Navbar from '../components/Navbar'
import GenerateImage from '../components/GenerateImage'


function Home() {
  return (
    <div className=' h-screen  p-3   w-full ' >

        <Navbar/>

        <GenerateImage/>
      

   

    </div>
  )
}

export default Home