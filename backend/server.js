import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import colors from "colors"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"

import connectDB from "./config/db.js"

dotenv.config()

connectDB()

//Initialize express app
const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from your React frontend
    credentials: true, // Allow cookies (if using)
  })
)

app.get("/", (req, res) => {
  res.send("API is running....")
})

//Use Routes

//User Related Routes
app.use("/api/users", userRoutes)

//Job Related Routes
app.use("/api/jobs", jobRoutes)

//error middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
})
