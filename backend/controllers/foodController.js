const foodModel=require("../models/foodModel")
const fs=require("fs")


// add food item

const addFood=async (req,res)=>{

    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category
    })

    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

// all list fod

const listFood=async (req,res)=>{

    try {
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

module.exports = addFood,listFood