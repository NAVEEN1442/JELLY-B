import { apiConnector } from "../apiConnector"
import {image} from "../apis"


const {
    GENERATE_IMAGE,
    ALL_MODELS,
} = image;

export function generateImage({prompt}){


    return async (dispatch)=>{

        try {
            
            
        console.log("prompt -",prompt);

        console.log("Required LINK : ",`${GENERATE_IMAGE}/${prompt}`)

        const GET_IMAGE_PROMPT = GENERATE_IMAGE.replace(":prompt", prompt);


        console.log(GET_IMAGE_PROMPT);

        const response = await apiConnector("GET",GET_IMAGE_PROMPT);

        // console.log("response image",response);

        const result = response?.data?.image;

        return result;


        } catch (error) {
            console.error("Error fetching image:", error);
        }

    }

}




export function showAllModels(){


    return async (dispatch)=>{

        const response = await apiConnector("GET",ALL_MODELS);
        console.log("RESPONSE",response)

        return response;

    }

}
