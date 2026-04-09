import mongoose from "mongoose"

const connectDb = async () => {
    try {
        console.log("🔄 Attempting to connect to MongoDB...")
        console.log("Connection URI:", process.env.MONGO_URI)
        
        await mongoose.connect(process.env.MONGO_URI, {
            family: 4,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        })
        
        console.log("✅ MongoDB connected successfully!")
    }
    catch(error) {
        console.error("❌ MongoDB connection failed")
        console.error("Error code:", error.code)
        console.error("Error message:", error.message)
        
        if (error.code === 'ECONNREFUSED') {
            console.log("\n⚠️ Connection refused! Common causes:")
            console.log("1. Your IP is not whitelisted in MongoDB Atlas")
            console.log("2. Wrong connection string")
            console.log("3. No internet connection")
            console.log("4. VPN is blocking connection\n")
        }
    }
}

export default connectDb