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
    message,
  })

  const createdBid = await bid.save()
  res.status(201).json(createdBid)
})

const getBidsForJob = asyncHandler(async (req, res) => {
  const jobId = req.params.jobId
  const bids = await Bid.find({ job: jobId }).populate("user", "name email")
  res.json(bids)
})

const updateBidStatus = asyncHandler(async (req, res) => {
  const { status } = req.body
  const bid = await Bid.findById(req.params.bidId)

  if (!bid) {
    res.status(404)
    throw new Error("Bid not found")
  }

  bid.status = status
  const updatedBid = await bid.save()
  res.json(updatedBid)
})
export { createBid, getBidsForJob, updateBidStatus }
