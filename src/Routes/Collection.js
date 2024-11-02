import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import logo from "../assets/logo.png"
import ImageCard from '../components/ImageCard'
import ImageModal from '../components/ImageModal';
import { saveAs } from 'file-saver';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { imagesFromACollection } from '../Services/operations/image';


function Collection() {

  const dispatch = useDispatch();
  const location = useLocation();

  const {name,thumbnail,item_id} = location.state || {};

  const [showModel,setShowModel] = useState(false);
  const [imagesData,setImagesData] = useState([]);
  const [selectedImage,setSelectedImage] = useState(null);

  
  const handleDownload = () => {
    saveAs(selectedImage.thumbnail, `${selectedImage.title}.jpg`);  // Pass the logo and filename
  };
  
  const fetchImagesCollections = async ()=>{
    
      console.log("item_id",item_id)

      const response = await dispatch(imagesFromACollection({item_id}));
      // console.log("response",response)

      if(response){
        setImagesData(response);
      }

  }

  const openModel=(image)=>{

    setSelectedImage(image);
    setShowModel(true);

  }

  console.log("selectedImage",selectedImage);

  useEffect(()=>{
    fetchImagesCollections();
  },[])

  return (
    <div  className=' h-screen w-full ' >

      <Navbar/>

      <div  className=' font-market   flex items-center justify-start ml-3 pl-5 gap-6 h-[80px] w-5/12 mt-12 ' >
      
        <p className=' text-[60px]  ' >{name}</p>

        <img className='  rounded-[120px] w-[75px] h-[73px]  ' src={thumbnail} />


      </div>

      <div className=' font-market flex flex-wrap h-[100%] w-[100%] ' >

      {
        imagesData.length > 0 ? imagesData.map((item,index)=>(
          
          <ImageCard 
          
          setShowModel={()=>openModel({title:item.title,thumbnail:item.Image_URL,ImageID:item._id})} key={index}  title={item.title} logo={item.Image_URL} />


        )) : <p className=' text-[red] flex w-[100%]  justify-center  text-[30px] ' >No images to show</p>
      }

       
        
        


      </div>

      {

        showModel ? <ImageModal  ImageID={selectedImage.ImageID} collectionID={item_id} download={handleDownload} setShowModel={setShowModel} title={selectedImage.title} logo={selectedImage.thumbnail} /> : <></>

      }



    </div>
  )
}

export default Collection