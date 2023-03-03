import express from "express";
import {
  getUserRole,
  getMaxNo,
  addUserRole,
} from "../services/user-role-services.js";

const user_role_router = express.Router();

user_role_router.get("/user-role", async (request, response) => {
  const result = await getUserRole();
  console.log(result);
  response.status(200).send(result);
});

user_role_router.post("/user-role", async (request, response) => {
  const { userRoleName } = request.body;

  const result = await addUserRole(userRoleName);
  console.log(result);
  response.status(200).send(result);
});

export default user_role_router;
