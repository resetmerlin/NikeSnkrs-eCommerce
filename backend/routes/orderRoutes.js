import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";

router.route("/").post(addOrderItems);
router.route("/:id").get(getOrderById);
router.route("/:id/pay").put(updateOrderToPaid);
