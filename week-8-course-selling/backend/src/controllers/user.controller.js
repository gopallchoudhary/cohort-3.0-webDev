import asyncHandler from "express-async-handler";
import { ApiError } from "../utils/ApiError.js";

//! import models
import { UserModel } from "../models/user.model.js";
import { PurchaseModel } from "../models/purchase.model.js";
import { CourseModel } from "../models/course.model.js";

//.access and refresh token
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("something went wrong");
  }
};

//.Sign Up
const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (
    [firstName, lastName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //! existed user
  const existedUser = await UserModel.findOne({ email });
  if (existedUser) {
    throw new ApiError(401, "User with email already exists");
  }

  //! create user
  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    //# created user
    const createdUser = await UserModel.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    console.log("User creation failed");
  }
});

//.Sign in
const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  //! user
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  //! password
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Incorrect Password");
  }

  //!tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await UserModel.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secur: true,
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      user: loggedInUser,
      accessToken,
      refreshToken,
    });
});

//.log out
const logOut = asyncHandler(async (req, res) => {
  const user = req.user;
  await UserModel.findByIdAndUpdate(
    user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
      message: "User logged out",
    });
});

//.change current password

//.update account details

//.Purchases
const purchases = async (req, res) => {
  const userId = req.user._id;
  const purchases = await PurchaseModel.find({
    userId,
  }).populate("courseId");

  if (purchases.length == 0) {
    throw new ApiError(400, "You havent bought any course yet");
  }

  // const courseData = await CourseModel.find({
  //   _id: {$in: purchases.map(x => x.courseId)}
  // });

  res.json({
    purchases,
  });
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    console.log(users);
    
    return res.json(users);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export { signUp, signIn, purchases, logOut, getUsers };
