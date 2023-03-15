console.log("--------------- Day-77 -------------");

const express = require("express");
const mongoose = require("mongoose");
const apiRounter = require("./routes/api");

const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Sodgerel:JfA7fHMQlxhrap5m@test.jed1udq.mongodb.net/test";

const app = express();
app.use(express.json());
app.use(apiRounter);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (request, response) => {
  response.send("<h1>DAY-77 Mongoose Application</h1>");
});

app.listen(PORT, () => {
  console.log(`Express application is running on http://localhost:${PORT}`);
});
