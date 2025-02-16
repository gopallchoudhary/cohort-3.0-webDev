import mongoose, { Schema } from "mongoose";

const purchaseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, 
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    }
})

export const PurchaseModel = mongoose.model("Purchase", purchaseSchema)