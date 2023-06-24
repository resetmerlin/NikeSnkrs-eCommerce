import asyncHandler from "express-async-handler";
import cyberProductModel from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const cyberProducts = await cyberProductModel.find({});

  res.json(cyberProducts);
});
export { getProducts };
