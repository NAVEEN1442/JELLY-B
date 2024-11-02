import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { generateImage, showAllModels } from '../Services/operations/image';

import Spinner from './Spinner';
import AddCollectionModal from './AddCollectionModal';

function GenerateImage() {

    const [server,setServer] = useState("SERVER1");
  
    const [loading,setLoading] = useState(false);
    const [addCollectionModal,setAddCollectionModal] = useState(false);
    const [prompt,setPrompt] = useState(
        {
            prompt:"",
        }
    );
    const [fetchedImage,setFetchedImage] = useState(null);
    const dispatch = useDispatch();

    const changeHandler = async (e)=>{

        setPrompt((prev)=>(

            {

                ...prev,
                [e.target.name] : e.target.value,
            }
        ))

    }
    
    const addToCollection = async ()=>{

        try {
            if(fetchImage){
                setAddCollectionModal(true);
            }
            

        } catch (error) {
            
        }

    }

    if(fetchedImage){
        console.log("fetch in gen",fetchedImage)
    }

    const fetchImage = async () => {
        try {
            setLoading(true);
            console.log("calling image");
            console.log("server in src",server);
            const imageResponse = await dispatch(generateImage({prompt: prompt.prompt,server}));
            console.log("image called");
            console.log("image res", imageResponse);

            if (imageResponse) {
                setFetchedImage(imageResponse);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };



  return (
    <div className=' flex lg:mt-0 mt-7 flex-col  items-center ' >

    <div className=' font-market fixed border-white border-4 bg-[#686868] flex flex-col p-2 right-[15px] top-[150px]  h-[180px] rounded-[7px] w-[250px] ' >
    <button onClick={()=>setServer("SERVER1")} className={`  rounded-[5px] h-[50%] w-[100%] ${server === "SERVER1" ? "bg-[#7E7D7D]" : "" } `}>SERVER 1</button>

        <button onClick={()=>setServer("SERVER2")} className={`  rounded-[5px] h-[50%] w-[100%] ${server === "SERVER2" ? "bg-[#7E7D7D]" : "" } `}>SERVER 2</button>


    </div>

    {
        fetchedImage != null ? 
        
        <div className=' font-market fixed hover:bg-[#212020] duration-150 hover:scale-95 bg-[#000000] flex justify-center items-center flex-col p-2 right-[15px] top-[360px]  h-[60px] rounded-[7px] w-[250px] ' >
            
            <button onClick={addToCollection} className=' tracking-[3px] ' >ADD TO COLLECTION</button>

        </div>

        : <></>
    }

        
        
        <div className=' mt-2 bg-[#000929]  border-[#DBFF00] p-1 rounded-[35px] border-2 flex items-center justify-center h-[300px] w-[380px] color border-dashed lg:h-[600px] lg:w-[940px] ' >
            {
                loading ? <Spinner/> :  fetchedImage ? <img className=' border-4 w-[100%] rounded-[35px] h-[100%] ' src={fetchedImage} alt='generated Image' />

                    : <p  className=' animate-bounce text-[10px] text-[#555454] lg:text-[14px] flex items-center justify-center text-center  ' >If You can think it we can draw it </p>
            }
        </div>

       <div className=' flex items-center lg:mt-0 mt-3 flex-col w-[100%] ' >
        <div className=' lg:text-[24px] text-[16px] w-[90%]  lg:w-7/12 text-[#555454] flex items-start lg:items-center   lg:h-[60px] ' >
                Your Description : 
            </div>

            <div className=' flex justify-center items-center w-[100%] h-[82px] ' >
                <input onChange={changeHandler} name='prompt' className=' w-[672px] h-[70%] p-2 rounded-[16px] focus:outline-none bg-[#000516] border border-[#474747]  ' placeholder='eg : A cat eating a pink apple' />
            </div>
       </div>

        <div className=' h-[60px]  flex items-center justify-center w-[100%]' >

            <button onClick={fetchImage} className='  h-[40px] w-[120px] rounded-[7px] bg-[white] border-4 hover:bg-[#090a1e]
             duration-500 hover:border-[#121833] border-[#090d1e] text-[#5e5ec8] font-bold text-[18px] ' >

                GENERATE
            </button>
        </div>


        {
            fetchedImage ? addCollectionModal ? <AddCollectionModal prompt={prompt} Image_URL={fetchedImage} setAddCollectionModal={setAddCollectionModal} /> : <></> : <></>
        }


        

    </div>
  )
}

export default GenerateImage