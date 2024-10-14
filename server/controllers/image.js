const axios = require("axios")

exports.generateImage = async (req, res) => {
  try {
    const imageURL = process.env.IMAGE_URL; // Make sure IMAGE_URL is correctly set in your environment variables
    const { prompt } = req.params; // Extract the prompt from the request body

    console.log("Received prompt",prompt)

    console.log(`${imageURL}/${prompt}`);

    // Fetch the image as an arraybuffer (binary data)
    const imageResponse = await axios.get(`${imageURL}/${prompt}`, {
      responseType: 'arraybuffer', // Important: to handle image binary data
    });

    // Convert the image buffer to base64
    const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');

    // Get the MIME type (content-type header from the response)
    const mimeType = imageResponse.headers['content-type'];

    // Send the base64 image in the response
    res.status(200).json({
      success: "true",
      message: "Image fetched successfully",
      image: `data:${mimeType};base64,${imageBuffer}`, // Base64-encoded image
    });

  } catch (error) {
    console.error("Error fetching image:", error);

    res.status(400).json({
      success: "false",
      message: "Image failed to fetch",
    });
  }
};

exports.getModels = async (req,res)=>{

    try {

      // console.log("Entered in the get model server controller")
      
      const modelsURL = process.env.MODEL_URL;

      const response = await axios.get(modelsURL);

      console.log("response : ",response.data);
      const Models_List = response.data;

      res.status(200).json({
        success:"true",
        message:"ALL MODELS FETCHED",
        Models_List,
      })




    } catch (error) {
      console.log("error in getting models",error);

      res.status(400).json({
        success:"FALSE",
        message:"ALL MODELS FAILED TO FETCH"
      })
    }


}