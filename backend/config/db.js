
const mongoose = require("mongoose")

const connectDB = async () => {

    await mongoose.connect('mongodb+srv://swastik:5aNtkBEvAiNMoRVZ@fooddelivery1.yk8y5.mongodb.net/food_delivery')

    console.log("Db Connection");
}


module.exports=connectDB;