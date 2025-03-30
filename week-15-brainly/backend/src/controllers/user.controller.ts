import { User } from "../models/user.model"
import { Request, Response } from "express"

async function signUp(req: Request, res: Response): Promise<void> {

    try {
        const { username, password } = req.body
        // validation
        if ([username, password].some((field) => field?.toString().trim() == "")) {
            res.status(400).json({ success: false, message: "username and passord are required" })
            return;
        }

        // creating a user
        const newUser = User.create({ username, password })

        res.status(200).json({ success: true, messagae: "User successfully created", user: newUser })

    } catch (error) {
        console.error("error while creating a user: ", error);
        res.status(500).json({ success: false, messsage: "Internal server error" })

    }
}

export { signUp }