import express from "express";


//? import controllers
import { deleteContent, getContent, postsContent } from "../controllers/content.controller";

const contentRouter = express.Router()

contentRouter.get("/get", getContent)
contentRouter.post("/post", postsContent)
contentRouter.delete("/delete", deleteContent)

export default contentRouter