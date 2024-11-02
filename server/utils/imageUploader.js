const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloud = async (file, folder, height, quality) => {
    const options = {
        folder,
    };

    options.resource_type = "auto";

    try {
        if (file.tempFilePath) {
            // Upload using the temporary file path
            return await cloudinary.uploader.upload(file.tempFilePath, options);
        } else if  (file.startsWith("data:image/")) {
          
            return await cloudinary.uploader.upload(file, options);
        } else {
            throw new Error("Invalid file format or missing file data.");
        }
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
};
