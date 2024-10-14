const express = require("express")
const router = express.Router();

const {generateImage,getModels} = require("../controllers/image");

router.get("/generateImage/:prompt",generateImage);
router.get("/getModels",getModels);

module.exports = router;