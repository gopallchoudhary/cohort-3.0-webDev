import mongoose, { Schema } from "mongoose";

const contentTypes = ["audio", "video", "image", "article"]

const ContentSchema = new Schema({
    title: {type: String, required: true},
    link: {type: String, required: true},
    type: {type: String, enum: contentTypes, required: true},
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type: mongoose.Types.ObjectId, ref: "User"}
}, {timestamps: true})

export const ContentModel = mongoose.model("Content", ContentSchema)