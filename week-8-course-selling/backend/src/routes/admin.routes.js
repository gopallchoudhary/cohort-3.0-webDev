import { Router } from "express";
const router = Router()


router.route("/signup").post()
router.route("/signin").post()
router.route("/course").post() // to post/provide course    
router.route("/course").put() // too edit the course
router.route("/course/bulk").get() // to see the no. of courses he/she provided

export default router