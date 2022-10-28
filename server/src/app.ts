import { Express } from "express";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import catalogRouter from "./routes";
import multer from "multer";
import path from "path";

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  multer({ dest: path.join(__dirname, "public/img/uploads") }).single("image")
);

app.use("/api", catalogRouter);

export default app;
