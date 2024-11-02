const axios = require("axios");
const { uploadImageToCloud } = require("../utils/imageUploader");
const User = require("../models/User");
const Collection = require("../models/Collection")

exports.generateImage = async (req, res) => {
  try {
    const { prompt } = req.params; 
    const URL = process.env.IMAGE_URL;
    const {server} = req.body;
    const userId = req.user.id;

    await User.findByIdAndUpdate(
      userId,
      {
        $push:{
          searches:prompt,
        }
        
        
      },
      {new:true},
    )

    console.log(userId);

    const H_F_API = process.env.BLACK_FOREST_API; 
    const H_F_TOKEN = process.env.H_F_TOKEN; 

    console.log("Received prompt:", prompt);

    let response;
    console.log("server",server)

    if(server === "SERVER1"){
      console.log("in 1")
       response = await axios.get(`${URL}/${prompt}`, {
        responseType: 'arraybuffer', 
      });

    }
    else if(server === "SERVER2"){
      console.log("in 2")
       response = await axios.post(
        H_F_API,
        { inputs: prompt }, 
        {
          headers: {
            Authorization: `Bearer ${H_F_TOKEN}`,
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer", 
        }
      );
    }

   
    const imageBuffer = Buffer.from(response.data, "binary");

    const imageURL = await uploadImageToCloud(`data:image/png;base64,${imageBuffer.toString('base64')}`, process.env.FOLDER_NAME);

   

    res.status(200).json({

      success:true,
      image : imageURL.secure_url,

    })

  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({
      success: "false",
      message: "Image failed to fetch",
    });
  }
};

exports.addImageToCollection = async (req,res) =>{

  try {
    
      const {collectionID,title,Image_URL} = req.body;

      const existingCollection = await Collection.findById({_id:collectionID});

      console.log(existingCollection);

      if(!existingCollection){
        return res.status(401).json({
          success:false,
          message:"Collection not found",
        })
      }

      await Collection.findByIdAndUpdate(
        collectionID,  // You can pass the ID directly without wrapping in an object
        {
          $push: {
            images: {
              title,       // If title is a variable, you can also just write `title`
              Image_URL, // Same for Image_URL
            },
          },
        },
        { new: true }
      );

      res.status(200).json({
        success:true,
        message:"Image added to the collection"
      })
   



  } catch (error) {
    console.log(error);
    res.status(400).json({
      success:false,
      message:"Image cant be added to the collection"
    })
 
  }

}

exports.removeImageFromCollection = async (req,res) =>{
  try {

    const {collectionID,ImageID} = req.body;

    const existingCollection = await Collection.findById({_id:collectionID});

    if(!existingCollection){
      return res.status(401).json({
        success:false,
        message:"Collection not found",
      })
    }


    await Collection.findByIdAndUpdate(
      collectionID,
      {
        $pull:{
          images:{_id:ImageID}
        }
      },
      {new:true},

    )

    
    res.status(200).json({
      success:true,
      message:"Image removed successfully",
     
    })

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success:false,
      message:"failed to remove the image"
    })
  }
}

exports.getImagesFromACollection = async (req,res)=>{

  try {

    const collectionID = req.params.id;

    console.log(collectionID);
    
    const collectionData = await Collection.findById({_id:collectionID});

    console.log(collectionData);

    

    res.status(200).json({
      success:true,
      message:"fetched the collection images",
      data : collectionData.images,
    })



  } catch (error) {
    console.log(error);
    res.status(400).json({
      success:false,
      message:"fetching the images of a collection failed"
    })
  }


}

