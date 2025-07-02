import express from "express"
const router = express.Router()

import {
  createJob,
  getJobById,
  getJobs,
  updateJob,
  deleteJob,
} from "../controllers/jobControllers.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").post(protect, admin, createJob).get(getJobs)
router
  .route("/:id")
  .get(getJobById)
  .put(protect, admin, updateJob)
  .delete(protect, admin, deleteJob)
export default router
