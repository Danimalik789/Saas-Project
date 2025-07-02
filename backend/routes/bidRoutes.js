import express from "express"
const router = express.Router()

import {
  createBid,
  getBidsForJob,
  updateBidStatus,
} from "../controllers/bidController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/:jobId").post(protect, createBid)
router.route("/jobs/:jobId").get(protect, getBidsForJob)
router.route("/:bidId/status").put(protect, admin, updateBidStatus)

export default router
