import { apiConnector } from "../apiConnector"
import {image} from "../apis"


const {
    GENERATE_IMAGE,
    ADD_IMAGE_COLLECTION,
    IMAGES_FROM_COLLECTION,
    REMOVE_IMAGE_COLLECTION,


} = image;

export function generateImage({prompt,server}){
  // console.log("server in op",server)

    return async (dispatch,getState)=>{

        try {
            
            
        // console.log("prompt -",prompt);
        // console.log("server in op",server)

        // console.log("Required LINK : ",`${GENERATE_IMAGE}/${prompt}`)

        const GET_IMAGE_PROMPT = GENERATE_IMAGE.replace(":prompt", prompt);

        const token = getState().auth.token;
        // console.log("Token from Redux:", token); // Check if the token is present
  
        if (!token) {
          throw new Error("Authorization failed");
        }
  
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Token should be added here
        };


        // console.log(GET_IMAGE_PROMPT);

        const response = await apiConnector("POST",GET_IMAGE_PROMPT,{server},headers);

        // console.log("response image",response);

        const result = response?.data?.image;

        return result;


        } catch (error) {
            console.error("Error fetching image:", error);
        }

    }

}

export function addImageToCollection({collectionID,Image_URL,prompt}){


    return async (dispatch)=>{

        try {
            // console.log("collectionID,Image_URL in function",collectionID,Image_URL);
            const response = await apiConnector("POST",ADD_IMAGE_COLLECTION,{collectionID,Image_URL,title:prompt});

            // console.log("Done adding the image")


        } catch (error) {
            console.error("Error fetching image:", error);
        }

    }

}

export function removeImageFromCollection({collectionID,ImageID}){


  return async (dispatch)=>{

      try {
          console.log("collectionID,Image_URL in function",collectionID,ImageID);
          const response = await apiConnector("POST",REMOVE_IMAGE_COLLECTION,{collectionID,ImageID});
          console.log(response);
         


      } catch (error) {
          console.error("Error fetching image:", error);
      }

  }

}

export function imagesFromACollection({item_id}){


  return async (dispatch)=>{

      try {

        // console.log("in the collection form a img",item_id)
        // console.log(IMAGES_FROM_COLLECTION);

        const finalURL = IMAGES_FROM_COLLECTION.replace(":id",item_id);

        // console.log(finalURL);

          const response = await apiConnector("GET",finalURL);

          // console.log("response of a image from the collection ",response)

          const result = response?.data?.data;

          return result;


      } catch (error) {
          console.error("Error fetching image:", error);
      }

  }

}




