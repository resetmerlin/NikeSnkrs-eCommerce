import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import createToken from "../utils/createToken.js";

// @desc Auth user & get token
// @route POST/api/products
// @access  Public
const authenticationUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: createToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email of password");
  }
});
// @desc Register a new user
// @route POST/api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExistence = await User.findOne({ email });

  if (userExistence) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    //we will gonna crypt it
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: createToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

///@desc GET user profile
// @route GET/api/user/profile
// @access  Private
const getClientProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

///@desc Update user profile
// @route PUT /api/user/profile
// @access  Private
const updateClientProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedClient = await user.save();
    res.status(201).json({
      _id: updatedClient._id,
      name: updatedClient.name,
      email: updatedClient.email,
      isAdmin: updatedClient.isAdmin,
      token: createToken(updatedClient._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
export {
  authenticationUser,
  getClientProfile,
  updateClientProfile,
  registerUser,
};
