import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productId: { type: Number, required: true },
    name: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    threeValue: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);
const productModel = mongoose.model("product", productSchema);
export default productModel;
