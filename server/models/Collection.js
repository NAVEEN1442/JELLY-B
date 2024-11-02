const mongoose = require("mongoose")

const CollectionSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
      
    },
   images: [
        {
            title: String,
            Image_URL: String,
        }
    ],
    created_By:{
        type:mongoose.Schema.Types.ObjectId,
    },
    created_At:{
        type:Date,
        
    },
    deleted_At:{
        type:Date,
    }


})

const Collection = mongoose.model("Collection",CollectionSchema);
module.exports = Collection;