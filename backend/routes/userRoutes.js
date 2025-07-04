import express from "express"
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} from "../controllers/userController.js"

import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/register").post(registerUser).get(protect, admin, getAllUsers)
router.post("/login", authUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
export default router
