import express from "express";


//? import controllers
import { deleteContent, getContent, postsContent } from "../controllers/content.controller.js";
import { userAuth } from "../middlewares/user.middleware.js";

const contentRouter = express.Router()

contentRouter.post("/post", userAuth, postsContent)
contentRouter.get("/get", userAuth, getContent)
contentRouter.delete("/delete", userAuth,  deleteContent)

export default contentRouter