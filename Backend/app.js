import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import promptRouter from "./src/router/prompt.router.js";
dotenv.config({ path: "./.env" });
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user",promptRouter);
export { app };
