import express from "express";
import {
  getProductCategory,
  addProductCategory,
  deleteProductCategory,
} from "../services/product-category-services.js";

const product_category_router = express.Router();

product_category_router.get("/product-category", async (request, response) => {
  const result = await getProductCategory();
  console.log(result);
  response.status(200).send(result);
});

product_category_router.post("/product-category", async (request, response) => {
  console.log("==========BODY TEST=========");
  console.log(request.body);
  const { categoryName, categoryDescription } = request.body;

  const result = await addProductCategory(categoryName, categoryDescription);
  console.log(result);
  response.status(200).send(result);
});

product_category_router.delete(
  "/product-category",
  async (request, response) => {
    const body = request.body;
    const result = await deleteProductCategory(body.id);
    response.status(200).send(result);
  }
);

export default product_category_router;
