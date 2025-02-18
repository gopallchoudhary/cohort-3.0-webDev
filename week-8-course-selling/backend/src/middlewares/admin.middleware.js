import { AdminModel } from "../models/admin.model.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

export const adminAuthMiddleware = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    //! decoded token
    const decodedToken = jwt.verify(token, "adminAccessToken")

    //! admin
    const admin = await AdminModel.findById(decodedToken._id).select("-password -refreshToken")
    if(!admin) {
        throw new ApiError(400, "Invalid access token")
    }

    req.admin = admin
    next()


  } catch (error) {
    throw new ApiError(401, error.message || "Invalid access token");
  }
});
