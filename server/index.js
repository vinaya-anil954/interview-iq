import dns from "dns"
dns.setDefaultResultOrder("ipv4first")
import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.get("/", (req, res) => {
    return res.json({ message: "Hello World" })
})

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) 
connectDb()
})
