import express from "express"
const app = express()

//! common middlewares
app.use(express.json())

//? import routes
import adminRouter from "./routes/admin.routes"
import userRouter from "./routes/user.routes"


//? routes
app.use("/admin", adminRouter)
app.use("/user", userRouter)


export  {app}