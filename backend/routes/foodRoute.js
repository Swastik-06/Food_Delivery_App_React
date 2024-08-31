const express = require('express')
const multer  = require('multer')
const addFood=require("../controllers/foodController")
const listFood=require("../controllers/foodController")

const foodRouter=express.Router();


// image Storage Engine

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.get("/list",listFood)


module.exports = foodRouter;