import express from "express";
const app = express()


//? import routes
import userRouter from "./routes/user.routes";
import contentRouter from "./routes/content.routes";




app.use("/api/v1/user",  userRouter)
app.use("api/v1/content", contentRouter)

export {app}