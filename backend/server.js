import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import colors from "colors"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"

import connectDB from "./config/db.js"

dotenv.config()

connectDB()

//Initialize express app
const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running....")
})

//Use Routes
app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
})
