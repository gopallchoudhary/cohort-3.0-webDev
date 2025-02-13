import mongoose, {Schema} from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/week-7-mongo")

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true,
    }
}, {timestamps: true})

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    title: {
        type: String,
        require: true
    }, 
    done: {
        type: Boolean
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)
export const Todo = mongoose.model("Todo", todoSchema)