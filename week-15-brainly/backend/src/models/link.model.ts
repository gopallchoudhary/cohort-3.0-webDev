import mongoose, { Schema } from "mongoose";

const LinkSchema = new Schema({
    hash: {type: String}, 
    userId: {type: mongoose.Types.ObjectId, required: true, ref: "User"}
})

export const LinkModel = mongoose.model("Link", LinkSchema)