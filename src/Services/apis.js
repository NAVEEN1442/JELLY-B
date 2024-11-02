const BASE_URL = process.env.REACT_APP_BASE_URL;


export const image = {

    GENERATE_IMAGE : BASE_URL + "/image/generateImage/:prompt",
    ADD_IMAGE_COLLECTION : BASE_URL + "/image/addImageToCollection",
    IMAGES_FROM_COLLECTION : BASE_URL + "/image/getImagesFromACollection/:id",
    REMOVE_IMAGE_COLLECTION : BASE_URL + "/image/removeImageFromCollection",

};

export const collection = {
    CREATE_COLLECTION : BASE_URL + "/image/createCollection",
    GET_USER_COLLECTION : BASE_URL + "/image/getUserCollection",
}

export const endpoint = {
    SIGNUP_API: BASE_URL + "/auth/signUp",
    LOGIN_API: BASE_URL + "/auth/logIn",
    OTP_API: BASE_URL + "/auth/sendotp",

};




