import express from "express"
const app = express()

//! common middlewares
app.use(express.json())

//? import routes
import adminRouter from "./routes/admin.routes.js"
import userRouter from "./routes/user.routes.js"
import courseRouter from "./routes/course.routes.js"


//? routes
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/courses", courseRouter)



export  {app}