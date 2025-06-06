import { User } from "../models/user.model.js";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

//. Sign Up
/**
 * The function `signUp` handles user sign-up requests, including validation, checking for existing
 * users, and creating a new user in a TypeScript application.
 * @param {Request} req - The `req` parameter in the `signUp` function represents the request object,
 * which contains information about the HTTP request made to the server. This object includes
 * properties such as the request headers, body, parameters, and other details sent by the client to
 * the server. In this context, `req
 * @param {Response} res - The `res` parameter in the `signUp` function is an object representing the
 * HTTP response that the server sends back to the client. It is used to send data back to the client,
 * such as status codes, JSON data, and other response information. In the provided code snippet, `res
 * @returns In the `signUp` function, different responses are being returned based on the conditions:
 */
async function signUp(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;
        //?  validation
        if ([username, password].some((field) => field?.toString().trim() == "")) {
            res
                .status(411)
                .json({ success: false, message: "username and passord are required" });
            return;
        }

        //? existed user
        const existedUser = await User.findOne({ username });
        if (existedUser) {
            res
                .status(403)
                .json({ success: true, message: "username already existed" });
            return;
        }

        //?  creating a user
        const newUser = User.create({ username, password });

        res
            .status(200)
            .json({ success: true, message: "User successfully signed up", user: newUser, });
    } catch (error) {
        console.error("error while creating a user: ", error);
        res.status(500).json({ success: false, messsage: "Internal server error" });
    }
}

//. token
/**
 * The function generates a token for a user based on their ID after checking if the user exists.
 * @param {any} userId - The `userId` parameter in the `generateToken` function is used to identify the
 * user for whom the token needs to be generated. It is expected to be the unique identifier of the
 * user in the system, typically a string or a number.
 * @returns The `generateToken` function is returning a Promise that resolves to a string, which is the
 * token generated for the user with the specified `userId`.
 */
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

    //? check password
    const checkPassword = await user?.isPasswordCorrect(password);
    if (!checkPassword) {
        res.status(403).json({ success: false, message: "Wrong password" })
        return;
    }

    //? token
    const token = await generateToken(user._id);
    

    const options = {
        httpOnly: true, 
        secure: true
    }

    res
        .status(200)
        .cookie("token", token, options)
        .json({ success: true, token: token });
}

export { signUp, signIn };
