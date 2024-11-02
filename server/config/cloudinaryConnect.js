const cloudinary = require("cloudinary").v2; 

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			
			url: process.env.CLOUDINARY_URL,
		});
	} catch (error) {
		console.log(error);
	}
};
