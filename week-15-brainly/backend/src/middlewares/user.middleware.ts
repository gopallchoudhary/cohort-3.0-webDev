import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { IUser, User } from "../models/user.model.js";

interface customRequest extends Request {
    user?: IUser
}


export const userAuth = async (req: customRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token || req.headers.authorization
        console.log("token: ", token);
        
        
        // const token  = req.headers.authorization
        
        
        const decodedToken = jwt.verify(token as string, "accessTokenSecret") as jwt.JwtPayload
        console.log("decoded token: ", decodedToken);
        
        const user = await User.findById(decodedToken._id)
        console.log("user: ", user);
        
        
        if (!user) {
            res.json({ success: false, message: "Invalid access token" })
            return
        }

        req.user = user
        next()
    } catch (error) {
        res.json({success: false, message: "Invalid! unauthorized"})
    }
}