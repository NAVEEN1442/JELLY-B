const Collection = require("../models/Collection");
const User = require("../models/User");
const { uploadImageToCloud } = require("../utils/imageUploader");


exports.createCategory = async (req,res) =>{

    try {
        const userId = req.user.id;
        const existingUser = await User.findById({_id:userId});
        console.log("id",existingUser);

        const {name,description} = req.body;
    
        const thumbnail = req.files.thumbnailImage;

        if(!name || !description || !thumbnail){
            return res.status(400).json({
                success:false,
                Message:"All the fields are required",
            })
        }

        const collectionExists = await Collection.findOne({name:name});

        if(collectionExists){
            return res.status(401).json({
                success:false,
                Message:"Collection already exists",
            })
        }

        console.log("image sent for cloud");
        const thumbnailImage = await uploadImageToCloud(thumbnail,process.env.FOLDER_NAME);
        console.log("image uploaded to cloud");

        const newCollection = new Collection({
            name,
            description,
            thumbnail:thumbnailImage.secure_url,
            created_By:existingUser.id,
            created_At:Date.now(),
        })

       const sendCollection = await Collection.create(newCollection);

       await User.findByIdAndUpdate(
        {_id:userId},
        {
            $push:{
                collections:sendCollection.id,
            }
        },
        {new:true},
       )

        return res.status(200).json({
            success:true,
            Message:"Collection created successfully",
        })

        


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            Message:"Collection creation failed",
        })
    }



}


exports.getUserCollection = async (req,res)=>{

    try {
        
        const userId = req.user.id;

        const existingUser = await User.findById(userId).populate('collections','name description thumbnail');

        const allCollections = existingUser.collections;

        return res.status(200).json({
            success:true,
            message:"All the collections are fetched",
            allCollections,
        })




    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            Message:"Fetching user collections failed",
        })
    }



}


