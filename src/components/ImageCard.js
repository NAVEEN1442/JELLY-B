import React from 'react'

function ImageCard({title,logo,setShowModel}) {
  return (
    <div onClick={setShowModel} className=' cursor-pointer flex mt-8 ml-8 flex-col items-center font-market gap-3 justify-center h-[350px] w-[320px] bg-[#1E1E1E] rounded-[12px] ' >

        <img src={logo} className='  rounded-[12px] h-[70%] w-[80%] ' />

        <div className=' h-[1%] w-[60%] bg-[#cea2e1] ' ></div>

        <p className=' h-[20%]  flex items-start justify-center  w-[90%] text-center text-[14px] overflow-auto no-scrollbar ' >{title}</p>


    </div>
  )
}

export default ImageCard