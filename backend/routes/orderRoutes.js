import express from "express";
const router = express.Router();
import { protection } from "../middleware/authMiddleware.js";

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderController.js";

router.route("/").post(protection, addOrderItems);
router.route("/:id").get(protection, getOrderById);
router.route("/:id/pay").put(protection, updateOrderToPaid);
router.route("/myorders").get(protection, getMyOrders);

export default router;
