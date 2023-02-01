console.log("it is my app");
// import necessary modules
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");

// configuration of modules
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const ObjectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: ObjectData,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
