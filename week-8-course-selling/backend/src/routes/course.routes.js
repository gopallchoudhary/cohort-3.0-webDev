import { Router } from "express";
const router = Router()

//# import controllers
import { coursePreview, purchase } from "../controllers/course.controller.js";
import { userAuthMiddleware } from "../middlewares/user.middleware.js";


//? routes
router.route("/purchase").post(userAuthMiddleware, purchase)
router.route("/preview").get(coursePreview)




export default router