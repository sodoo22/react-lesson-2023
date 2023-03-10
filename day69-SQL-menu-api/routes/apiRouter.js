import express from "express";
import { getPopularCategory } from "../services/category_services.js";
import { getChildenMenu, getParentMenus } from "../services/menus-services.js";
const apiRouter = express.Router();

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategory();
  console.log(result);
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildenMenu(parent.id);
      console.log(children);
      parent.children = children;
      // return parent;
    })
  );

  // console.log(result);
  response.status(200).send(parentMenus);
});

// emp_router.get("/employees", async (request, response) => {
//   const result = await getEmployees();
//   console.log(result);
//   response.status(200).send(result);
// });

// emp_router.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   console.log(result);
//   response.status(200).send(result);
// });

// emp_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await fireEmployee(body.empNo);
//   console.log(result);
//   response.status(200).send(result);
// });

// emp_router.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(result);
//   response.status(200).send(result);
// });

export default apiRouter;
