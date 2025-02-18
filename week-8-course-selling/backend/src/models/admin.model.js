import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const adminSchema = new Schema({
    firstName: {
        type: String,
        requuired: true,
        index: true,
        trim: true
    },
    lastName: {
        type: String,
        requuired: true,
        index: true,
        trim: true
    },
    email: {
        type: String,
        requuired: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    }, 
    password: {
        type: String,
        requuired: [true, "Password is required"]
    },
    refreshToken: {
        type: String,
    }
})

//! password-hashing
adminSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

//! password-comparison
adminSchema.methods.isPasswordCorrect = async function(password) {
    return bcrypt.compare(password, this.password)
}

//? access-token
adminSchema.methods.generateAccessToken =  function() {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            firstName: this.firstName
        },
        "adminAccessToken",
        {expiresIn: "1d"}
    )
}

//? refresh-token
adminSchema.methods.generateRefreshToken =  function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        "adminRefreshToken",
        {expiresIn: "10d"}
    )
}

export const AdminModel = mongoose.model("Admin", adminSchema)