import React, { useState } from 'react'
import TwoButtons from './TwoButtons'
import { FaTrashCan } from "react-icons/fa6";
import DeleteModal from './DeleteModal';

function ImageModal({title,logo,setShowModel,download,collectionID,ImageID}) {

  const [showDeleteModal,setShowDeleteModal] = useState(false);
  
  const removeModal = ()=>{

    setShowModel(false);

}

  return (
    <div className=' font-market  fixed inset-1 z-[50] grid place-items-center !mt-0 overflow-auto  ' >
    
      <div className='  bg-[#1E1E1E] p-2 flex flex-col items-center justify-between gap-3 w-[700px] h-[600px] rounded-[12px]  ' >

        <img className=' rounded-[12px] h-[70%] w-[100%] ' src={logo} />

        <p className=' flex text-[18px] text-[#e3e330]  overflow-auto no-scrollbar text-center justify-center h-[15%] w-[80%] ' >{title}</p>

        <TwoButtons func2={download} h2={"black"} func1={removeModal} text1={"CLOSE"} text2={"DOWNLOAD"} />

      </div>

      <button onClick={()=>setShowDeleteModal(true)} className=' right-[370px] border-[#1E1E1E] border-4 top-[30px] absolute h-[50px] w-[50px] tracking-[4px] bg-[#891818] text-[18px] font-bold rounded-[205px] text-[#be6d6d] flex items-center justify-center gap-3 ' >    
        <span className=' text-[#ffffff] text-[22px] ' ><FaTrashCan /></span>
      </button>

      {
        showDeleteModal ? <DeleteModal collectionID={collectionID} ImageID={ImageID}   setShowDeleteModal={setShowDeleteModal} /> : <></>
      }


    </div>
  )
}

export default ImageModal