import express from "express";
import { addUser, deleteUser, getUsers } from "../services/user-services.js";

const users_router = express.Router();

users_router.get("/users", async (request, response) => {
  const result = await getUsers();
  console.log(result);
  response.status(200).send(result);
});

users_router.post("/users", async (request, response) => {
  const {
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId,
  } = request.body;

  const result = await addUser(
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId
  );
  console.log(result);

  response.status(200).send(result);
});

users_router.delete("/users", async (request, response) => {
  const body = request.body;
  const result = await deleteUser(body.id);

  const res = await getUsers();
  response.status(200).send(res);
});

export default users_router;
