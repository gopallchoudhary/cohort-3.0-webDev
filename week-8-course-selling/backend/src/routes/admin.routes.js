import { Router } from "express";
const router = Router()

import { signUp, signIn, logOut, createCourse, updateCourse, allCourses } from "../controllers/admin.controller.js";
import { adminAuthMiddleware } from "../middlewares/admin.middleware.js";

router.route("/signup").post(signUp)
router.route("/signin").post(signIn)
router.route("/logout").get(adminAuthMiddleware, logOut)
router.route("/createCourse").post(adminAuthMiddleware, createCourse) // to post/provide course    
router.route("/updateCourse").put(adminAuthMiddleware, updateCourse) // too edit the course
router.route("/course/bulk").get(adminAuthMiddleware, allCourses) // to see the no. of courses he/she provided

export default router