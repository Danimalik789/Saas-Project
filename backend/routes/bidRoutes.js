import express from "express"
const router = express.Router()

import { createBid, getBidsForJob } from "../controllers/bidController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/:jobId").post(protect, createBid)
router.route("/jobs/:jobId").get(protect, getBidsForJob)

export default router
