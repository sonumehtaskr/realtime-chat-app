import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileupload from "express-fileupload";
import path from "path";

import { connectDB } from "./lib/db.js";
import { cloudinaryConnect } from "./lib/cloudinary.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
} else {
  app.use(
    "/uploads",
    express.static(path.join(__dirname, "src", "controllers", "uploads"))
  );
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
  cloudinaryConnect();
});
