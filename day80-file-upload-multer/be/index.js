// import express from "express";

const express = require("express");
const cors = require("cors");
const multer = require("multer");

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

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send(`<h1>DAY-80 File upload Multer</h1>`);
});

app.post("/fileUpload", upload.single("image"), (req, res, next) => {
  // res.send(req.file);
  console.log(req.file);
  res.json({
    data: [],
  });
});

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
