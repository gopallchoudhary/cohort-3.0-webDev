import asyncHandler from "express-async-handler";
import { ApiError } from "../utils/ApiError.js";

//! import models
import { AdminModel } from "../models/admin.model.js";
import { CourseModel } from "../models/course.model.js";

//.Access-and-Refresh Tokens
const generateAccessAndRefreshToken = async (userId) => {
    try {
        const admin = await AdminModel.findById(userId);
        const accessToken = admin.generateAccessToken();
        const refreshToken = admin.generateRefreshToken();
        admin.refreshToken = refreshToken;
        await admin.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        console.log("something went wrong ", error);
        throw new ApiError(500, "something went wrong");
    }
};

//.Sign Up
const signUp = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (
        [firstName, lastName, email, password].some((field) => field.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    //! existed admin
    const existedAdmin = await AdminModel.findOne({ email });
    if (existedAdmin) {
        throw new ApiError(400, "Email already registered");
    }

    //! create admin
    try {
        const admin = await AdminModel.create({
            firstName,
            lastName,
            email,
            password,
        });

        //! created admin
        const createdAdmin = await AdminModel.findById(admin._id).select(
            "-password -refreshToken"
        );
        if (!createdAdmin) {
            throw new ApiError(
                500,
                "something went wrong while registering an admin"
            );
        }

        return res.status(201).json({
            message: "Admin registered successfully",
        });
    } catch (error) {
        console.error(error);
        console.log("Admin registerring failed");
    }
});

//.Sign-in
const signIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        throw new ApiError(400, "Email and password are required");
    }

    //! find admin
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
        throw new ApiError(500, "Admin with this email does not exists");
    }

    //! vefify password
    const isPasswordCorrect = await admin.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        throw new ApiError(400, "Wrong password");
    }

    //! tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
        admin._id
    );

    //! loggedInAdmin
    const loggedInAdmin = await AdminModel.findById(admin._id).select(
        "-password -refreshToken"
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            admin: loggedInAdmin,
            accessToken,
            refreshToken,
        });
});

//.log out
const logOut = asyncHandler(async (req, res) => {
    const admin = req.admin;
    console.log(admin);
    const updateAdmin = await AdminModel.findByIdAndUpdate(
        admin._id,
        {
            $set: {
                refreshToken: undefined,
            },
        },
        {
            new: true,
        }
    );
    console.log(updateAdmin);
    // await AdminModel.findByIdAndUpdate(
    //     admin._id,
    //     {
    //         $set: {
    //             refreshToken: undefined,
    //         },
    //     },
    //     {
    //         new: true
    //     }
    // )

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(201)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
            message: "Admin logged out",
        });
});

//. createCourse
const createCourse = asyncHandler(async (req, res) => {
    const admin = req.admin;
    const { title, description, price, imageUrl } = req.body;

    const course = await CourseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId: admin._id,
    });

    if (!course) {
        throw new ApiError(500, "something went wrong while creating the course");
    }

    res.json({
        message: "Course created",
        courseId: course._id,
    });
});

//. update course
const updateCourse = asyncHandler(async (req, res) => {
    const admin = req.admin;
    const { title, description, price, imageUrl, courseId } = req.body;

    const updatedCourse = await CourseModel.findOneAndUpdate(
        {
            creatorId: admin._id,
            _id: courseId,
        },
        {
            title,
            description,
            price,
            imageUrl,
        }
    );



    if (!updatedCourse) {
        throw new ApiError(500, "Could not find the course with specific id");
    }

    res.json({
        message: "Course updated",
        courseId: updatedCourse._id,
        updatedCourse,
    });
});

//. all courses
const allCourses = asyncHandler(async (req, res) => {
    const admin = req.admin;
    const getCourses = await CourseModel.find({ creatorId: admin._id });
    if (getCourses.length == 0) {
        throw new ApiError(500, "No courses availabe");
    }

    res.json({
        message: "Courses created by Admin",
        getCourses,
    });
});

export { signUp, signIn, logOut, createCourse, updateCourse, allCourses };
