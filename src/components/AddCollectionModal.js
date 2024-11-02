import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionBar from './CollectionBar';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';
import { FaTrashCan } from "react-icons/fa6";
import { fetchUserCollection } from '../slices/collectionSlice';


function AddCollectionModal({setAddCollectionModal,Image_URL,prompt}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("img url",Image_URL)
    console.log("prompt",prompt)

    const collectionList = useSelector((state)=>state.collection.collectionList);
    console.log("collectionList",collectionList);

    useEffect(() => {
      dispatch(fetchUserCollection());
    }, []);



  return (
    <div className=' font-market  fixed inset-1 z-[50] grid place-items-center !mt-0 overflow-auto ' >

        <div className=' h-[650px] flex gap-3 flex-col items-center p-3 w-[550px] bg-[#000929] border-2 border-[white] ' >

            <button onClick={()=>setAddCollectionModal(false)}  className=' right-[450px] border-[#1E1E1E] border-4 top-[15px] absolute h-[50px] w-[50px] tracking-[4px] bg-[#891818] text-[18px] font-bold rounded-[205px] text-[#be6d6d] flex items-center justify-center gap-3 ' >    
                <span className=' text-[#ffffff] text-[22px] ' ><FaTrashCan /></span>
            </button>

            <p className=' h-[5%] text-[20px] tracking-[3px] ' >Existing Collections</p>

            <div className=' flex flex-col gap-3  items-center h-[80%]  w-[100%] overflow-auto no-scrollbar   ' >
                {

                    collectionList.length > 0 ? 

                    collectionList.map((item,index)=>(
                        <CollectionBar key={index} prompt={prompt.prompt} collectionID={item._id} Image_URL={Image_URL}  title={item.name} thumbnail={item.thumbnail} />
                    )) : <p className=' text-[red] text-[20px] text-center ' >No Collections Yet... But don't worry you can create a new collection </p>

                }
            </div>

            <div className=' h-[10%] flex flex-col gap-2 items-center justify-evenly w-[400px] ' >
                <div className=' w-10/12 bg-[white] h-[1px] ' ></div>

        
               
                <button onClick={()=>{navigate("/addCollection")}} className=' h-[100%] w-[100%]  border-2 bg-[white] text-[black] border-dashed border-[#000929] ' >Create A Collection</button>
                
            </div>

     

        </div>



    </div>
  )
}

export default AddCollectionModal