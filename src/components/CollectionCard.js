import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


function CollectionCard({title,description,thumbnail}) {
  return (
    <div className='  border-2 border-[#a200ff] font-market flex flex-col items-center justify-between p-4 h-[250px] w-[466px] bg-[#14192B] rounded-[7px] ' >
        {
          console.log("title,description,thumbnail",title,description,thumbnail)
        }
       <div className=' h-[30%] flex w-[100%] items-center text-[32px] justify-between pl-1 pr-1 ' >
            <p>{title}</p>
            <img className=' w-[75px] h-[73px] rounded-[100px]  ' src={thumbnail} />
       </div>

        <div className=' flex justify-between items-center  h-[70%] w-[100%] '>
            <p className=' h-[100%] w-[80%] flex items-center justify-center text-[24px] text-[#FFEA00] ' >{description}</p>
            <IoIosArrowForward className=' w-[10%] mt-20 text-[blue] text-[60px] ' />
        </div>


    </div>
  )
}

export default CollectionCard