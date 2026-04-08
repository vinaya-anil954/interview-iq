import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            family: 4   // 🔥 FORCE IPv4
        })
        console.log("MongoDB connected successfully")
    }
    catch(error){
        console.error("MongoDB connection failed", error)
    }
}

export default connectDb