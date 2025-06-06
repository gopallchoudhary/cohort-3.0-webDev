import { Request, Response } from "express";
import { LinkModel } from "../models/link.model.js";
import { customRequest } from "./content.controller.js"; 
import { random } from "../utils/randomString.js";
import { User } from "../models/user.model.js";
import { ContentModel } from "../models/content.model.js";

async function shareBrain(req: customRequest, res: Response): Promise<void> {
    const { share } = req.body
    const user = req.user

    if (share) {
        const linksData = await LinkModel.create({
            userId: user?._id,
            hash: random(20)
        })
        res.json({ success: true, message: "Created sharable link", linksData })
    } else {
        await LinkModel.deleteOne({
            userId: user?._id
        })
        res.json({ success: false, message: "link deleted successfully" })
    }

}

async function shareLink(req: Request, res: Response): Promise<void> {
    const hash = req.params.sharelink
    const link = await LinkModel.findOne({
        hash: hash
    })

    if (!link) {
        res.json({ message: "No link available for sharing" })
        return
    }

    const user = await User.findOne({ _id: link?.userId })
    if (!user) {
        res.json({ message: "User not found" })
        return
    }

    const content = await ContentModel.findOne({ userId: user._id })
    if (!content) {
        res.json({ message: "No content found" })
        return
    }

    res.json({
        success: true,
        user,
        content
    })
}

export { shareBrain, shareLink }