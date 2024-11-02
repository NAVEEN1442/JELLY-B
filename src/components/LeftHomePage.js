import React from 'react'
import Keypad from "../assets/Keypad.png"

function LeftHomePage() {
  return (
    <div className=' mt-[50px] flex h-[300px] ' >

        <div className=' flex flex-col p-5 gap-4 items-center justify-center  w-[70%] h-[100%] ' >

            <p className=' text-center  text-[45px] w-[100%] h-[30%]  ' >
               IF YOU CAN THINK IT WE CAN DRAW IT
            </p>

            <p  className=' text-[#757575] text-center  text-[20px] w-[100%] h-[70%]  '>
               Try writing : A cat eating an apple
            </p>


        </div>


        <div className='  w-[30%] flex items-center justify-center h-[100%] ' >

            <img className=' w-[90%] h-[90%] ' src={Keypad} />

        </div>



    </div>
  )
}

export default LeftHomePage