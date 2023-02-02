console.log("it is my app");
// import necessary modules
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");

// configuration of modules
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const ObjectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: ObjectData,
    });
  });
});

app.delete("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    firstName: body.firstName,
    lastName: body.lastName,
    age: body.age,
    phoneNumber: body.phoneNumber,
    email: body.email,
    password: body.password,
  };

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    console.log("=======");
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.get("/products", (request, response) => {
  fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const ObjectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: ObjectData,
    });
  });
});

app.post("/products", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    title: body.title,
    subTitle: body.subTitle,
    price: body.price,
    rating: body.rating,
  };

  fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    console.log("=======");
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./data/productsData.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.delete("/products", (request, response) => {
  const body = request.body;

  fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);

    fs.writeFile(
      "./data/productsData.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.put("/products", (request, response) => {
  console.log(request.body);
  fs.readFile("./data/productsData.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.title = request.body.title),
          (d.price = request.body.price),
          (d.rating = request.body.rating);
      }
      return d;
    });

    fs.writeFile(
      "./data/productsData.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        console.log(request.body);
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
