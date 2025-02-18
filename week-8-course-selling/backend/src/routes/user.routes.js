import { Router } from "express";
const router = Router();

//# import controllers
import {
  logOut,
  purchases,
  signIn,
  signUp,
} from "../controllers/user.controller.js";
import { userAuthMiddleware } from "../middlewares/user.middleware.js";

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/logout").get(userAuthMiddleware, logOut);
router.route("/purchases").get(userAuthMiddleware, purchases); // already purchased

export default router;
