import mongoose from "mongoose";

const connectMongodb = () => {
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connect with mongodb")
    }
    catch(error){
        console.log("Errror is on connect mongodb",error)
    }
}

export default connectMongodb;