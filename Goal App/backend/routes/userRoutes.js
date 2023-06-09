const express = require ("express")
const router = express.Router()
const {registerUser,loginUser,getMe} = require("../controlles/userController")
const {protect} = require ("../middleware/authmiddleware")

router.post("/",registerUser)
router.post("/login",loginUser)
router.get("/me",protect,getMe)

module.exports = router