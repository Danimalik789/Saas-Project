import asyncHandler from "express-async-handler"
import Bid from "../models/bidModels.js"
import Job from "../models/jobModels.js"

const createBid = asyncHandler(async (req, res) => {
  const { bidAmount, timeline, message } = req.body
  const jobId = req.params.jobId

  const job = await Job.findById(jobId)

  if (!job || job.status !== "open") {
    res.status(400)
    throw new Error("Job not found or not open for bidding")
  }

  const alreadyBid = await Bid.findOne({ job: jobId, user: req.user._id })
  if (alreadyBid) {
    res.status(400)
    throw new Error("You have already placed a bid on this job")
  }

  const bid = new Bid({
    job: jobId,
    user: req.user._id,
    bidAmount,
    timeline,
  })
})
