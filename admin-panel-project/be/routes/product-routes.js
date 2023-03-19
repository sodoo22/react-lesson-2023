import express from "express";
import { getProducts } from "../services/product-services.js";

const product_router = express.Router();

product_router.get("/products", async (request, response) => {
  const result = await getProducts();
  console.log(result);
  response.status(200).send(result);
});

// product_router.post("/users", async (request, response) => {
//   const {
//     firstName,
//     lastName,
//     birthDate,
//     email,
//     phoneNumber,
//     address,
//     userRoleId,
//   } = request.body;

//   const result = await addUser(
//     firstName,
//     lastName,
//     birthDate,
//     email,
//     phoneNumber,
//     address,
//     userRoleId
//   );
//   console.log(result);

//   response.status(200).send(result);
// });

// product_router.delete("/users", async (request, response) => {
//   const body = request.body;
//   const result = await deleteUser(body.id);

//   const res = await getUsers();
//   response.status(200).send(res);
// });

export default product_router;
