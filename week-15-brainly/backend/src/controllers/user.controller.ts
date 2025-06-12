import { User } from "../models/user.model.js";
import { Request, Response } from "express";

//. Sign Up

async function signUp(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;
        //>  validation
        if ([username, password].some((field) => field?.toString().trim() == "")) {
            res
                .status(411)
                .json({ success: false, message: "username and password are required" });
            return 
        }

        
        

        //> existed user
        const existedUser = await User.findOne({ username });
        if (existedUser) {
            
            res
                .status(409)
                .json({ success: false, message: "username already existed" });
                
            return
        }

        

        //>  creating a user
        const newUser = await User.create({ username, password });

        res
            .status(200)
            .json({ success: true, message: "User successfully signed up", user: newUser, });
            return

    } catch (error) {
        console.error("error while creating a user: ", error);
        res.status(500).json({ success: false, messsage: "Internal server error" });
        return
    }
}

//. token
async function generateToken(userId: any): Promise<string> {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        const token = user?.generateToken();
        return token;
    } catch (error) {
        throw new Error("Token generation failed");
    }
}

//. Sign In
async function signIn(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    if (!(username && password)) {
        res.status(403).json({ success: false, message: "username and password are required" })
        return;
    }

    const user = await User.findOne({ username });

    if (!user) {
        res.status(403).json({ success: false, message: "No user found" })
        return;
    }

    //> check password
    const checkPassword = await user?.isPasswordCorrect(password);
    if (!checkPassword) {
        res.status(403).json({ success: false, message: "Wrong password" })
        return;
    }

    //> token
    const token = await generateToken(user._id);


    // const options = {
    //     httpOnly: true,
    //     secure: true
    // }

    res
        .status(200)
        .cookie("token", token)
        .json({ success: true, token: token, message: "You are logged in" });
}

export { signUp, signIn };
