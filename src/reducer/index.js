import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import collectionReducer from "../slices/collectionSlice";

const rootReducer  = combineReducers({
    auth: authReducer,
    collection: collectionReducer,
   
})

export default rootReducer