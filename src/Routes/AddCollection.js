import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import TwoButtons from '../components/TwoButtons'
import { useNavigate } from 'react-router-dom';
import { createCollection } from '../Services/operations/collection';
import { useDispatch } from 'react-redux';

function AddCollection() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [collectionData,setCollectionData] = useState([
    {
      title:"",
      description:"",
      thumbnail:null,
    }
  ]);

  const handleOnChange = (e) =>{

    setCollectionData((prev)=>({
      ...prev,
      [e.target.name]: e.target.name === "thumbnail" ? e.target.files[0] : e.target.value ,
    }))

  }

  const goBack = ()=>{

    navigate(-1);

  }


  const addCollection = async ()=>{
  
    const formData = new FormData();

    formData.append("name",collectionData.title);
    formData.append("description",collectionData.description);
    formData.append("thumbnailImage",collectionData.thumbnail);


    await dispatch(createCollection(formData,navigate));


  }





  return (
    <div className=' flex-col items-center flex gap-8  h-screen w-full ' >

        <Navbar/>

        <div className=' w-[1248px] h-[1px] bg-[white] ' ></div>

        <div className=' w-[100%] gap-14 font-market  flex p-12 flex-col h-[100%] ' >

            <div className='h-[60px] rounded-[12px] bg-[#949292] p-1 flex items-center justify-center gap-2 w-[768px] ' >

              <div className=' flex items-center rounded-[12px] tracking-[4px] justify-center text-[28px] bg-[#686868] h-[53px] w-[30%] ' >NAME</div>
              
              <input onChange={handleOnChange} name='title' className=' outline-none pl-2 text-[black] text-[28px] bg-[#D9D9D9] rounded-[12px] w-[70%] h-[53px] ' />
              
            </div>

            <div className='h-[60px] rounded-[12px] bg-[#949292] p-1 flex items-center justify-center gap-2 w-[768px] ' >

              <div className=' flex items-center rounded-[12px]  tracking-[4px] justify-center text-[28px] bg-[#686868] h-[53px] w-[30%] ' >DESCRIPTION</div>
              
              <input onChange={handleOnChange} name='description' className=' outline-none pl-2 text-[black] text-[28px] bg-[#D9D9D9] rounded-[12px] w-[70%] h-[53px] ' />
              
            </div>

            <div  className='h-[270px] rounded-[12px] bg-[#949292] text-[#5b5959] p-1 flex items-center justify-center gap-2 w-[400px] '>
              <input onChange={handleOnChange} name='thumbnail' type='file' placeholder='Enter your image here' className=' flex items-center justify-center outline-none bg-[#949292] h-[100%] w-[100%] ' />
            </div>

            <div className=' w-[100%] flex items-center justify-center ' >

                <TwoButtons func1={goBack} func2={addCollection} text1={"EXIT"} text2={"CREATE"} />

            </div>

            



        </div>

    </div>
  )
}

export default AddCollection