import React from 'react'
import { useState } from 'react';
import SuccessModal from './SuccessModal';
import { useDispatch } from 'react-redux';
import { addImageToCollection } from '../Services/operations/image';

function CollectionBar({title,thumbnail,collectionID,Image_URL,prompt}) {

    const [addModal,setAddModal] = useState(false);
    const dispatch = useDispatch();

    const addImage = async()=>{
        setAddModal(true);
        console.log("collectionID,Image_URL",collectionID,Image_URL)

        const response = await dispatch(addImageToCollection({collectionID,Image_URL,prompt}));
        

    }


  return (
    <div className=' flex w-11/12 p-2 h-[100px] bg-[#020C2F] ' >

        <div className=' flex gap-8 items-center justify-start w-[50%] ' >
            <p className=' text-[yellow] ' >{title}</p>
            
            <img className='rounded-[120px] w-[55px] h-[53px]' src={thumbnail} />
        </div>

        <div className=' flex items-center gap-3 justify-end w-[50%] ' >

            <div className=' h-[80%] w-[1px] bg-[white] ' ></div>

            <button onClick={addImage} className=' bg-[black] rounded-[12px] h-[50px] w-[100px] ' >ADD</button>

        </div>

        
            {
                addModal ? <SuccessModal setSuccessModal={setAddModal} title={"Successfully Added To Your Collection"} /> : <></>
            }


    </div>
  )
}

export default CollectionBar