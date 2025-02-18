import asyncHandler from "express-async-handler"
import { PurchaseModel } from "../models/purchase.model.js"
import { CourseModel } from "../models/course.model.js"
import { ApiError } from "../utils/ApiError.js"

//.course-purchase
const purchase = asyncHandler(async (req, res) => {
    const userId = req.user._id
    const courseId = req.body.courseId

    const courseBought = await PurchaseModel.create({
        userId, 
        courseId
    })

    if(!courseBought) {
        throw new ApiError(400, "Failed to purchase the course")
    }

    res.json({
        message: "you have successfully purchased the course"
    })
})

//.course-preview 
const coursePreview = asyncHandler(async (req, res) => {
    const allCourses = await CourseModel.find()
    if(allCourses.length == 0) {
        throw new ApiError(400, "No courses available, please visit later")
    }

    res.json({
        message: "All Courses", 
        allCourses
    })
})

export {purchase, coursePreview }