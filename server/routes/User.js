const express = require("express")
const router = express.Router();

const {signUp,sendotp,resetPassword, logIn} = require("../controllers/Auth");


router.post("/signup",signUp);
router.post("/login",logIn);
router.post("/sendotp",sendotp);
router.post("/resetPassword",resetPassword);


module.exports = router;