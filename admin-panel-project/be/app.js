console.log(
  "------------------------ Convert to MySQL ------------------------"
);

import express from "express";
import cors from "cors";
import user_role_router from "./routes/users-role-routes.js";
import product_category_router from "./routes/product-category-routes.js";

// const cors = require("cors");
// const fs = require("fs");

// configuration of modules
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(user_role_router);
app.use(product_category_router);

// app.get("/user-role", (request, response) => {
//   response.send(
//     "<h1 style='text-align: center; background-color: orange'>Convert to MySQL</h1>"
//   );

//   // fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//   //   if (readError) {
//   //     response.json({
//   //       status: "file reader error",
//   //       data: [],
//   //     });
//   //   }
//   //   const ObjectData = JSON.parse(readData);

//   //   response.json({
//   //     status: "success",
//   //     data: ObjectData,
//   //   });
//   // });
// });

// app.delete("/users", (request, response) => {
//   const body = request.body;

//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }

//     const readObject = JSON.parse(readData);
//     const filteredObject = readObject.filter((o) => o.id !== body.userId);

//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(filteredObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "write file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: filteredObject,
//         });
//       }
//     );
//   });
// });

// app.post("/users", (request, response) => {
//   const body = request.body;
//   console.log(body);

//   const newUser = {
//     id: Date.now().toString(),
//     firstName: body.firstName,
//     lastName: body.lastName,
//     age: body.age,
//     phoneNumber: body.phoneNumber,
//     email: body.email,
//     password: body.password,
//   };

//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file does not exist",
//         data: [],
//       });
//     }

//     const dataObject = JSON.parse(readData);
//     console.log(dataObject);
//     console.log("=======");
//     dataObject.push(newUser);
//     console.log(dataObject);

//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(dataObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "Error during file write",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: dataObject,
//         });
//       }
//     );
//   });
// });

// app.put("/users", (request, response) => {
//   console.log(request.body);
//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "File read error",
//         data: [],
//       });
//     }
//     const savedData = JSON.parse(readData);

//     const changedData = savedData.map((d) => {
//       if (d.id === request.body.id) {
//         (d.firstName = request.body.firstName),
//           (d.lastName = request.body.lastName),
//           (d.age = request.body.age);
//         d.phoneNumber = request.body.phoneNumber;
//         d.email = request.body.email;
//         d.password = request.body.password;
//       }
//       return d;
//     });

//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(changedData),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "file write error",
//             data: [],
//           });
//         }
//         console.log(request.body);
//         response.json({
//           status: "success",
//           data: changedData,
//         });
//       }
//     );
//   });
// });

// app.get("/products", (request, response) => {
//   fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }
//     const ObjectData = JSON.parse(readData);

//     response.json({
//       status: "success",
//       data: ObjectData,
//     });
//   });
// });

// app.post("/products", (request, response) => {
//   const body = request.body;
//   console.log(body);

//   const newUser = {
//     id: Date.now().toString(),
//     productImageUrl: body.productImageUrl,
//     title: body.title,
//     subTitle: body.subTitle,
//     price: body.price,
//     rating: body.rating,
//   };

//   fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file does not exist",
//         data: [],
//       });
//     }

//     const dataObject = JSON.parse(readData);
//     console.log(dataObject);
//     console.log("=======");
//     dataObject.push(newUser);
//     console.log(dataObject);

//     fs.writeFile(
//       "./data/productsData.json",
//       JSON.stringify(dataObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "Error during file write",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: dataObject,
//         });
//       }
//     );
//   });
// });

// app.delete("/products", (request, response) => {
//   const body = request.body;

//   fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }

//     const readObject = JSON.parse(readData);
//     const filteredObject = readObject.filter((o) => o.id !== body.userId);

//     fs.writeFile(
//       "./data/productsData.json",
//       JSON.stringify(filteredObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "write file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: filteredObject,
//         });
//       }
//     );
//   });
// });

// app.put("/products", (request, response) => {
//   console.log(request.body);
//   fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "File read error",
//         data: [],
//       });
//     }
//     const savedData = JSON.parse(readData);

//     const changedData = savedData.map((d) => {
//       if (d.id === request.body.id) {
//         (d.productImageUrl = request.body.productImageUrl),
//           (d.title = request.body.title),
//           (d.price = request.body.price),
//           (d.rating = request.body.rating);
//       }
//       return d;
//     });

//     fs.writeFile(
//       "./data/productsData.json",
//       JSON.stringify(changedData),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "file write error",
//             data: [],
//           });
//         }
//         console.log(request.body);
//         response.json({
//           status: "success",
//           data: changedData,
//         });
//       }
//     );
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
