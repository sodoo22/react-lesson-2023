const express = require("express");
const categoryRouter = express.Router();
const Category = require("../models/Category");

categoryRouter.get("/list", async (request, response) => {
  const result = await Category.find({});

  response.status(200).json({
    data: result,
  });
});

categoryRouter.post("/create", async (request, response) => {
  const body = request.body;
  const result = await Category.create(body);

  response.status(200).json({
    data: result,
  });
});

categoryRouter.put("/update", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await Category.updateMany(
    { name: body[1].name },
    { $set: { name: body[0].rename } }
  );

  response.status(200).json({
    data: result,
  });
});

categoryRouter.delete("/delete", async (request, response) => {
  const body = request.body;

  const result = await Category.deleteMany(body);

  response.status(200).json({
    data: result,
  });
});

module.exports = categoryRouter;
