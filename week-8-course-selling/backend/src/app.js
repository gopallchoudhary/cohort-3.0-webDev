import express from "express"
const app = express()
import cookieParser from "cookie-parser"
import cors from 'cors'

//! common middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//! import routes
import adminRouter from "./routes/admin.routes.js"
import userRouter from "./routes/user.routes.js"
import courseRouter from "./routes/course.routes.js"


//? routes
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/courses", courseRouter)



// Global error handler to catch errors
app.use((err, req, res, next) => {
    console.error(err); // Logs the error for debugging
    res.status(400).json({ message: err.message }); // Sends error response to client
    });



export  {app}