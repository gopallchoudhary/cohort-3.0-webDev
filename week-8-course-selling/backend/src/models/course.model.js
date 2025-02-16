import mongoose, { Schema } from "mongoose"

const courseSchema = new Schema({
    title: {
        type: String,
        requuired: true,
        trim: true
    },
    description: {
        type: String,
        requuired: true,
        trim: true
    },
    price: {
        type: Number,
        requuired: true,
    }, 
    imageUrl: {
        type: String,
        requuired: true
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    }
})


export const CourseModel = mongoose.model("Course", courseSchema)