import { ContentModel } from "../models/content.model.js";
import { Request, Response } from "express";
import { IUser } from "../models/user.model.js";

export interface customRequest extends Request {
    user?: IUser
}


//? post
async function postsContent(req: customRequest, res: Response) {
    const { title, link, type, tags, userId } = req.body
    if ([title, link, type].some((field) => field?.toString().trim() == "")) {
        res
            .status(411)
            .json({ success: false, message: "Incomplete information" })
        return;
    }
    const user = req.user
    const content = ContentModel.create({ title, link, type, tags, userId: user?._id })
    res.json({ success: true, message: "content addedd successfully", content: content })
}


//? get
async function getContent(req: customRequest, res: Response) {
    const user = req.user

    if (!user) {
        res.json({ success: false, message: "Invalid authentication" })
        return;
    }

    const userId = user._id

    const content = await ContentModel.find({ userId: userId }).populate("userId", "-password")



    res.json({ success: true, content })
}


//? delete
async function deleteContent(req: customRequest, res: Response) {
    const user = req?.user
    const deletedContent = await ContentModel.deleteMany({userId: user?._id})
    res.json({deletedContent: deletedContent})
}

export { getContent, postsContent, deleteContent }