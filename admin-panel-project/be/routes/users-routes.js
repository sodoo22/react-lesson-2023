import express from "express";

const user_router = express.Router();

import { getUsers } from "../services/user-services.js";

user_router.get("/users", async (request, response) => {
  const result = await getUsers();
  console.log(result);
  response.status(200).send(result);
});

export default user_router;
