import { Router } from "express";
const router = Router()

//# import controllers
import { coursePreview, coursePurchase } from "../controllers/course.controller.js";


//? routes
router.route("/preview").get(coursePreview)
router.route("/purchase").post(coursePurchase)




export default router