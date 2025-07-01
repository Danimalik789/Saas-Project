import asyncHandler from "express-async-handler"
import Job from "../models/jobModels.js"

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Private (admin only)

const createJob = asyncHandler(async (req, res) => {
  const { title, desc, budget, deadline, category } = req.body

  const job = new Job({
    title,
    desc,
    budget,
    deadline,
    category,
    poster: req.user._id,
  })

  const createdJob = await job.save()
  res.status(201).json(createdJob)
})

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find().populate("poster", "name email")
  res.json(jobs)
})

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public

const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id).populate("poster", "name email")
  if (job) {
    res.json(job)
  } else {
    throw new Error("Job Not Found")
  }
})

export { createJob, getJobs, getJobById }
