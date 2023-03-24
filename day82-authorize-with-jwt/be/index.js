const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminApiRouter = require("./routes/Admin-api");
const apiRouter = require("./routes/Api");

require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/admin", adminApiRouter);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  response.status(200).send(`<h1>DAY-82 Authentication and Authorization</h1>`);
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
