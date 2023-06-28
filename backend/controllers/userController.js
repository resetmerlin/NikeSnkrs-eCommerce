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
export { authenticationUser };
