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

const updateJob = asyncHandler(async (req, res) => {
  const { title, desc, budget, deadline, category, status } = req.body

  const job = await Job.findById(req.params.id)
  if (job) {
    job.title = title || job.title
    job.desc = desc || job.desc
    job.budget = budget || job.budget
    job.deadline = deadline || job.deadline
    job.category = category || job.category
    job.status = status || job.status

    const updatedJob = await job.save()
    res.json(updatedJob)
  } else {
    res.status(404)
    throw new Error("No Job Found")
  }
})

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)
  if (job) {
    await job.deleteOne()
    res.json({
      message: "Job deleted",
    })
  } else {
    res.status(404)
    throw new Error("No Job Found")
  }
})

export { createJob, getJobs, getJobById, updateJob, deleteJob }
