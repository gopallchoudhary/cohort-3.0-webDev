import express, { urlencoded } from "express";
import cors from 'cors'
const app = express()


//? common middlewares
app.use(express.json())
app.use(express.static("public"))
app.use(urlencoded({extended: true}))
app.use(cors())


//? import routes
import userRouter from "./routes/user.routes.js";
import contentRouter from "./routes/content.routes.js";
import brainRouter from "./routes/brain.routes.js";




app.use("/api/v1/user", userRouter)
app.use("/api/v1/content", contentRouter)
app.use("/api/v1/brain", brainRouter)

export { app }