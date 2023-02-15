console.log("Day-62 User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

// API User Login Password
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    // JSON stringees objecto bolgono
    const usersArrayObj = JSON.parse(readData);

    const foundUser = usersArrayObj.filter((user) => body.email === user.email);

    // User users.json d baihgui bol
    if (foundUser.length === 0) {
      response.json({
        status: "user not found",
        data: [],
      });
    } else {
      // hervee oldvol
      const foundUserObj = foundUser[0];
      console.log(foundUserObj);

      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "Username or Password do not match",
              data: [],
            });
          }

          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.userName,
                lastName: foundUserObj.lastName,
              },
            });
          } else {
            response.json({
              status: "Username or Password do not match",
              data: [],
            });
          }
        }
      );
    }
  });
});

// API User Register
app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }

    const readDataObj = JSON.parse(readData);
    console.log(readData);

    fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }
      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id == body.role)[0];

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "bcrypt genarating salt error",
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }

          console.log("hashed Data", hashData);
          const newUser = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };
          readDataObj.push(newUser);

          // fs write
          fs.writeFile(
            "./data/users.json",
            JSON.stringify(readDataObj),
            (writeError) => {
              if (writeError) {
                response({
                  status: "file write error",
                });
              }
              response.json({
                status: "success",
                data: readDataObj,
              });
            }
          );
        });
      });
    });
  });
});

// API get all users
app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

// API get all user roles
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http:/localhost:${PORT}`);
});
