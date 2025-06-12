import { signIn, signUp } from "../controllers/user.controller.js";
import express from "express";


const userRouter = express.Router()

userRouter.post("/signup", signUp)
userRouter.post("/signin", signIn)

export default userRouter 