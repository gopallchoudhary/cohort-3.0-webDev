import { app } from "./app.js"
import connectDB from "./db/index.js"
const PORT = 5001;
import dotenv from "dotenv"
dotenv.config({
    path: "./.env",
})

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection error: ", err)
})

