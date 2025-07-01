import mongoose from "mongoose"

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    desc: String,
    budget: {
      type: Number,
      required: [true, "title is required"],
    },
    deadline: Date,
    category: {
      type: String,
      required: [true, "category is required"],
    },
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
