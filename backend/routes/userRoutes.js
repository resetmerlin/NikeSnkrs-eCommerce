import express from "express";
const router = express.Router();
import {
  authenticationUser,
  getClientProfile,
  registerUser,
  updateClientProfile,
} from "../controllers/userController.js";

router.route("/login").post(authenticationUser);
router.route("/profile").get(getClientProfile).put(updateClientProfile);

export default router;
