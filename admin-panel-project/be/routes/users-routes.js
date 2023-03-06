import express from "express";
import { getUsers } from "../services/user-services.js";

const users_router = express.Router();

users_router.get("/users", async (request, response) => {
  const result = await getUsers();
  console.log(result);
  response.status(200).send(result);
});

export default users_router;
