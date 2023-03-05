import express, { response } from "express";
import {
  getUserRole,
  addUserRole,
  deleteUserRole,
  updateUserRole,
} from "../services/user-role-services.js";

const user_role_router = express.Router();

user_role_router.get("/user-role", async (request, response) => {
  const result = await getUserRole();
  // console.log(result);
  response.status(200).send(result);
});

user_role_router.post("/user-role", async (request, response) => {
  const { userRoleName } = request.body;

  const result = await addUserRole(userRoleName);
  // console.log(result);
  response.status(200).send(result);
});

user_role_router.delete("/user-role", async (request, response) => {
  const body = request.body;
  const result = await deleteUserRole(body.userRoleId);
  // console.log(result);
  response.status(200).send(result);
});

user_role_router.put("/user-role", async (request, response) => {
  const body = request.body;
  const result = await updateUserRole(body.userRoleId, body.userRoleName);
  response.status(200).send(result);
});

export default user_role_router;
