import React, { useState } from 'react'
import TwoButtons from "../components/TwoButtons"
import SuccessModal from './SuccessModal';
import { useDispatch } from 'react-redux';
import { removeImageFromCollection } from '../Services/operations/image';

function DeleteModal({setShowDeleteModal,collectionID,ImageID}) {

    const [successModal,setSuccessModal] = useState(false);

    const dispatch = useDispatch();


    const removeModal =  ()=>{



        setShowDeleteModal(false)

    }



    const deleteModal = async()=>{

        const response = await dispatch(removeImageFromCollection({collectionID,ImageID}));
        setSuccessModal(true);


    }


    return (
        <div className=' font-market  fixed inset-1 z-[50] grid place-items-center !mt-0 overflow-auto  ' >
        
         <div className='  bg-[#1E1E1E] p-2 flex flex-col items-center justify-between gap-3 border-4 w-[500px] h-[300px] rounded-[12px]  ' >
    
            
    
            <p className=' flex flex-col text-[20px] text-[#e93a3a] items-center justify-center h-[50%] w-[90%] ' >
            
            ARE YOU SURE YOU WANTS TO DELETE IT<br/><br/>

            <span className=' text-[#646262] text-[12px] ' >( Note: This action can't be changed )</span>


            
            </p>
    
                <TwoButtons func1={removeModal} h2={"black"} func2={deleteModal} text1={"NO"} text2={"YES"} />
    
            </div>

            {
                successModal ? <SuccessModal setSuccessModal={setSuccessModal} title={"SUCCESSFULLY DELETED"} /> : <></>
            }
            
    
            
    
        </div>
      )
}

export default DeleteModal