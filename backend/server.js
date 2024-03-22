import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const middaleware = [
  morgan("dev"),
  express.urlencoded({ extended: true }),
  express.json(),
  cors(),
  cookieParser(),
];

app.use(middaleware);

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
