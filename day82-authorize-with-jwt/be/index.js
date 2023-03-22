const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminApiRouter = require("./routes/Admin-api");
const apiRouter = require("./routes/Api");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Sodgerel:JfA7fHMQlxhrap5m@test.jed1udq.mongodb.net/test";

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
