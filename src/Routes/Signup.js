import React from 'react'
import { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { sendotp } from '../Services/operations/authAPI';
import { NavLink } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { setSignupData } from '../slices/authSlice';
import { useEffect } from 'react';


function Welcome() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const {email,password,confirmPassword} = formData;

  const handleOnChange = (e)=>{
    setFormData((prev)=>(
      {
        ...prev,
        [e.target.name] : e.target.value,
      }
    ))
  }


  const loginHandler = async (e) => {
    
    e.preventDefault();

    if(email.trim() === '' || password.trim() === '' || confirmPassword.trim() ===''){
      
 
      toast.error("All the fields are required to be filled");


    
    }
    else if(password === confirmPassword){

      setFormData(
        {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
      )
      try {


        dispatch(setSignupData(formData));
     
        dispatch(sendotp(email,navigate))
        
      } catch (error) {
        console.error("Error during signup:", error);
      }

   
      
    }
    else{
 
      toast.error("Password and Confirm Password doesn't match");
    }

    
    
  };

  return (
    
    <div className=' font-market w-full flex justify-center items-center   gap-4 mx-auto h-screen ' >

    <div className='login bg-contain md:bg-auto flex  border-4 h-[700px]  md:w-10/12 md:h-[600px] bg-slate-900'>
    <div className=' pl-6  md:pl-12'>

<div className=' flex items-center   h-[100px] '>
<NavLink to="/">
<button className=' flex gap-2 text-[20px] items-center ml-5 mt-5 w-[50px] button-30 ' ><AiFillHome /></button>
</NavLink>
          
            </div>
    <div className=' font-extrabold flex flex-col text-[20px] md:text-[40px]'>
        Welcome New User! <span className=' font-extrabold tracking-[5px] welcome-name text-[yellow] text-[30px] md:text-[60px]'>MIND DOODLE</span> 
    </div>

    <div className=' mt-5  items-center gap-5 flex'>
      <div className=' text-[#b56060] tracking-[3px] font-bold text-[15px]  md:text-[30px]  '>
          EMAIL :
      </div>
      <div className='md:ml-14 ml-8' >
        <input

            name='email'
            value={email}

          onChange={handleOnChange
        } className='text-black md:ml-28 ml-14 p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>

    </div>

    <div className='gap-6 items-center mt-3  flex'>
    <div className=' text-[#b56060] tracking-[3px] font-bold text-[15px]  md:text-[30px]  ' >
          PASSWORD :
      </div>
      <div>
        <input  name='password'
            value={password}
             type="password" onChange={handleOnChange} className='text-black md:ml-28 ml-14 p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>
    </div>
    <div className='gap-6 items-center mt-3  flex'>
    <div className=' font-bold tracking-[3px] text-[#b56060] text-[15px]  md:text-[30px]  ' >
          CONFIRM PASSWORD :
      </div>
      <div>
        <input  name='confirmPassword'
            value={confirmPassword}
             type="password" onChange={handleOnChange} className='text-black p-2 h-[20px] w-[150px]  md:h-[40px] md:w-[300px] text-[10px]  md:text-[15px] rounded-xl' />
      </div>
    </div>
 
    <div className='flex flex-col gap-4 w-10/12 mt-5 justify-center items-center'>
 
    <div><button onClick={loginHandler}  className='button-30 gap-2 flex  ' >SignUp <span><SlLogin /></span></button></div>
  
       
        <NavLink to="/login">
        <div className=' md:text-blue-500 text-blue-500 underline cursor-pointer'>
          Already have an account [ LogIn ]!
        </div>
        </NavLink>
    </div>
  

    
</div>
    </div>
    
        

             
    </div>
  )
}

export default Welcome