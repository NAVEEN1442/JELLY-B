import React from 'react'
import EmojiPad from "../assets/EmojiPad.png"

function RightHomePage() {
  return (
    <div className=' mt-[50px] flex h-[300px] ' >

            <div className='  w-[30%] flex items-center justify-center h-[100%] ' >

                <img className=' w-[90%] h-[90%] ' src={EmojiPad} />

            </div>

             <div className=' flex flex-col p-5 gap-4 items-center justify-center  w-[70%] h-[100%] ' >

                    <p className='   text-[45px] w-[100%] h-[30%]  ' >
                        REGISTER YOURSELF NOW
                    </p>

                    <p  className=' text-[#757575] text-[38px] w-[100%] h-[70%]  '>
                        Play with your imagination with our <span className=' text-[red] ' > TEXT-TO-IMAGE </span> generation AI
                    </p>


            </div>

            

    </div>
  )
}

export default RightHomePage