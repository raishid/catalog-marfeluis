import { Express, Request } from "express";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import catalogRouter from "./routes";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from 'uuid';

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storageMulter: multer.StorageEngine = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img"),
  filename: (req, file, callback) => {
    callback(null, `${uuidv4()}-${path.extname(file.originalname)}`);
  },
});
app.use(multer({ storage: storageMulter }).single("image"));

app.use("/api", catalogRouter);

export default app;
