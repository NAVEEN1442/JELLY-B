import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext';
import toast from 'react-hot-toast';

function Services_List({title,description,path}) {

    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();

    const loginChecker = () =>{

        if (isLoggedIn) {
            navigate(`${path}`);
          } else {
            toast.error("Login Required");
            navigate("/login");
          }
        

    }

  return (
    <div className=' text-[black] h-[180px] p-3 flex justify-center  items-center w-[500px] bg-[white] rounded-[30px]  ' >

        <div className=' flex h-[100%] text gap-2 w-[76%] items-center justify-center flex-col ' >

            <p className='  w-[100%] text-[40px] flex items-center justify-center  font-market text-[#ff2727] h-[30%] text-center   ' >{title}</p>

            <p className='  w-[100%] text-[20px] font-description h-[70%] flex items-center justify-center text-center   ' > {description} </p>

        </div>

        <div className=' h-[90%] bg-[black] w-[2px]  ' ></div>

        <div className='  flex h-[100%] w-[22%] items-center justify-evenly flex-col '>
            <button onClick={loginChecker} className=' font-explore text-[24px] text-[#055509] font-explore bg-[#9BDB9D] h-[60px] w-[150px] rotate-[-90deg] flex items-center justify-center  ' >EXPLORE</button>
        </div>


    </div>
  )
}

export default Services_List