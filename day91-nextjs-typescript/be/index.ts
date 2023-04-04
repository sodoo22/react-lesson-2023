import TheaterRouter from "./routes/theaters.api";
import CommentRouter from "./routes/comments.api";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import MoviesRouter from "./routes/movies.api";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const MONGO_URI =
  process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";

app.use(cors());
app.use(express.json());

let name: string = "<h1>DAY-91  Next JS Typescript</h1>";

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(name);
});

app.use("/theaters", TheaterRouter);
app.use("/comments", CommentRouter);
app.use("/movies", MoviesRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => {
      console.error(error);
    });
  console.log(`Application running on http://localhost:${PORT}`);
});
