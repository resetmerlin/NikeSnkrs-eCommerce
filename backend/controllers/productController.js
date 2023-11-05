import asyncHandler from "express-async-handler";
import cyberProductModel from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const cyberProducts = await cyberProductModel.find({});

  res.json(cyberProducts);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const cyberProduct = await cyberProductModel.findById(req.params.id);

  if (cyberProduct) {
    return res.json(cyberProduct);
  } else {
    res.status(404);
    //custom error handler
    throw new Error("Product not found");
  }

  res.json(cyberProduct);
});

export { getProductById, getProducts };
