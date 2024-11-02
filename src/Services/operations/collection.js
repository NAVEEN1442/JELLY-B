import {collection} from "../apis";
import { apiConnector } from "../apiConnector";

const {

    CREATE_COLLECTION,
    GET_USER_COLLECTION,



} = collection;

export function createCollection(formData,navigate){

    return async (dispatch,getState)=>{
        
        try {
            
            const token = getState().auth.token;
            console.log("Token from Redux:", token); 
      
            if (!token) {
              throw new Error("Authorization failed");
            }
      
            const headers = {
              
              Authorization: `Bearer ${token}`, 
            };

          

            const response = await apiConnector("POST",CREATE_COLLECTION,formData,headers);

            console.log("response creating the collection",response);

            const result = response?.data?.data;
            navigate("/collectionList")

            return result;


        } catch (error) {
            console.log("error in creating a collection",error);
        }



    }




}

export async function getUserCollection(token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await apiConnector("GET", GET_USER_COLLECTION, null, headers);
    const result = response?.data?.allCollections;

    return result;
  } catch (error) {
    console.error("Error fetching user collection:", error);
    throw error; // Re-throw the error to handle it in `fetchUserCollection`
  }
}

