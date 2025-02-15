import mongoose, { Schema } from "mongoose";
mongoose
    .connect("mongodb://127.0.0.1:27017/week-7-mongo")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error"));

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const todoSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
export const Todo = mongoose.model("Todo", todoSchema);
