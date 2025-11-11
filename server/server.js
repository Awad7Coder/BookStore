import express from "express";
import {db} from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors";
import morgan from "morgan";
import bookRoute from "./routes/bookRoute.js" ;
import AppError from "./utilities/appError.js";
dotenv.config();

const app = express();
db();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api",bookRoute)

app.use((req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404, "fail"));
});
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.statusText || "error",
    message: err.message,
  });
});

app.listen(process.env.PORT,() => console.log(`Server is running on PORT ${process.env.PORT}`));
