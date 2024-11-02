const express = require("express")
const router = express.Router();

const {generateImage,addImageToCollection,getImagesFromACollection,removeImageFromCollection} = require("../controllers/image");
const {auth} = require("../middlewares/auth");
const {createCategory,getUserCollection} = require("../controllers/Collection");

router.post("/generateImage/:prompt", auth ,generateImage);
router.post("/createCollection",auth,createCategory);
router.get("/getUserCollection",auth,getUserCollection);
router.post("/addImageToCollection",addImageToCollection);
router.get("/getImagesFromACollection/:id",getImagesFromACollection);
router.post("/removeImageFromCollection",removeImageFromCollection);

module.exports = router;