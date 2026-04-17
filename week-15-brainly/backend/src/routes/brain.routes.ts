import express from "express";
import { shareBrain, shareLink } from "../controllers/brain.controller.js";
import { userAuth } from "../middlewares/user.middleware.js";


const brainRouter = express.Router()

brainRouter.post("/share", userAuth, shareBrain)
brainRouter.get("/share/:sharelink", shareLink)

export default brainRouter