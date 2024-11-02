import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Services/operations/authAPI';
import Information from './Information';
import toast from 'react-hot-toast';

function Navbar() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [infoModal,setInfoModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async ()  =>{
      setIsLoggedIn(false)
      await dispatch(logout(navigate));
     

    }

    
    const loginChecker = (path) =>{

      if (isLoggedIn) {
        console.log("logggg")
        console.log(path);
          navigate(path);
        } else {
          toast.error("Login Required");
          navigate("/login");
        }
      

  }

  return (
    <div className=' w-[100%]  flex items-center justify-evenly  h-[120px] ' >

            <div className=' flex items-center h-[80%] w-[15%] justify-start gap-1 ' >
              <NavLink to="/" >
                <img className=' h-[80%] w-[120px] ' src={logo} />
              </NavLink>
            </div>


           <div className='  flex items-end justify-center h-[100%] w-[100%] ' >
              <div className=' flex items-center mix-blend-hard-light  justify-evenly bg-[#000720] border-[#FFFB00] border-l-2 border-r-2 border-dashed rounded-[4px] w-[70%] h-[40%]  ' >

               <NavLink to="/services" >
                  <p>SERVICES</p>
               </NavLink>
                <p onClick={()=>setInfoModal(true)} >ABOUT</p>
                <p onClick={()=>setInfoModal(true)} >CONTACT US</p>
             
                <p onClick={()=>loginChecker("/collectionList")} >COLLECTIONS</p>
              

              </div>
           </div>

            

            <div className=' h-[100%] font-market  items-center  justify-end mr-3 flex w-[15%]   ' >

                    {
                      isLoggedIn ? (
                        <button onClick={logoutHandler} className='   border-2 tracking-[5px] rounded-[7px]   w-[160px] h-[50px] text-[20px] text-center'>LogOut</button>

                      ) : (
                        
                        <NavLink to={"/login"} >
                          <button className='   border-2 tracking-[5px] rounded-[7px]   w-[160px] h-[50px] text-[20px] text-center  ' >LOGIN</button>
                        </NavLink>
                        
                      )
                    }
            </div>

            {
              infoModal ? <Information setInfoModal={setInfoModal} /> : <></>
            }

            

    </div>
  )
}

export default Navbar


