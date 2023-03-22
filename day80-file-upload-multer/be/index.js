// import express from "express";

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const app = express();
const PORT = 8080;
const upload = multer({ storage: storage });

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send(`<h1>DAY-80 File upload Multer</h1>`);
});

app.get("/uploads", (request, response) => {
  const filesPath = [];

  fs.readdirSync("./uploads").forEach((file) => {
    console.log("========================== TEST ========================");
    console.log(file);
    const url = `http://localhost:8080/uploads/${el}`;
    filesPath.push(url);
  });

  response.send({
    data: filesPath,
  });
});

app.post("/fileUpload", upload.single("image"), (req, res, next) => {
  // res.send(req.file);
  console.log(req.file);

  const images = fs.readdirSync("./uploads");

  const array = [];
  const dataImage = images.forEach((el) => {
    const fileUrl = `http://localhost:8080/uploads/${el}`;
    array.push(fileUrl);
  });
  console.log(array);

  res.json({
    data: array,
  });
});

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
