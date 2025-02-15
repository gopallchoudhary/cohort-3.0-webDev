import { Router } from "express";
const router = Router()

//# import controllers
import { purchases, signIn, signUp } from "../controllers/user.controller.js";


router.route("/signup").post(signUp)
router.route("/signin").post(signIn)
router.route("/purchases").get(purchases) // already purchased



export default router