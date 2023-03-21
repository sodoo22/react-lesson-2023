// import express from "express";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/todo-routes");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Sodgerel:JfA7fHMQlxhrap5m@test.jed1udq.mongodb.net/test";

app.use(cors());
app.use(express.json());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response.status(200).send(`<h1>DAY-81 Insert Update / DeleteMany</h1>`);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => {
      console.error(error);
    });
  console.log(`Application running on http://localhost:${PORT}`);
});
