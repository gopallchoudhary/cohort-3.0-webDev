import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export interface IUser extends Document {
    username: string;
    password: string;
}

export interface IUserMethods {
    isPasswordCorrect(password: string): Promise<boolean>
    generateToken(): string
}


const UserSchema: Schema<IUser, {}, IUserMethods> = new Schema<IUser, {}, IUserMethods>({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

//? password hashing
UserSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


//? password check 
UserSchema.methods.isPasswordCorrect = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

//? token
UserSchema.methods.generateToken = function (): string {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username
        },
        "accessTokenSecret"
    )
}




export const User = mongoose.model<IUser, Model<IUser, {}, IUserMethods>>("User", UserSchema)