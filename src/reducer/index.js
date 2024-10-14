import {combineReducers} from "@reduxjs/toolkit";
import imageReducer from "../slices/imagesSlice"; 


const rootReducer  = combineReducers({
    image: imageReducer,
   
})

export default rootReducer