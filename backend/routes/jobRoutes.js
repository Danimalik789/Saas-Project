import express from "express"
const router = express.Router()

import { createJob, getJobById, getJobs } from "../controllers/jobControllers.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").post(protect, admin, createJob).get(getJobs)
router.route("/:id").get(getJobById)
export default router
