const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    collections: [
        { 
            type: mongoose.Schema.Types.ObjectId,
             ref: 'Collection' 
        }
    ],
    searches:[
        {
            type:String,
        }
    ],
    token:{
        type:String,
    },
    created_At:{
        type:Date,
        
    },
    deleted_At:{
        type:Date,
    }

})

const User = mongoose.model("User",userSchema);
module.exports = User;