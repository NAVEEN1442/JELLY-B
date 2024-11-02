import React from 'react'
import "../components/Spinner.css"

function Spinner() {
  return (
    <div className=' flex flex-col items-center justify-center gap-2 ' >
        <div className='loader'  ></div>

        <p className=' animate-pulse text-[12px] text-[red] ' >They say staring the eyes makes the response faster !</p>
    </div>
  )
}

export default Spinner


  