import mongoose from "mongoose"

const jobSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    budget: Number,
    deadline: Date,
    category: String,
    status: {
      type: String,
      enum: ["open", "assigned", "completed"],
      default: "open",
    },
    poster: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedFreelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("Job", jobSchema)
