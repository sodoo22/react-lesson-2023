console.log("Day-51: API express JS");
const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const bodyParcer = require("body-parser");
let counter = 1;
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParcer.json());

let data = [{ id: 1, name: "Sodoo", major: "CS" }];

app.get("/", (request, response) => {
  response.send("Here I'm a Server");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.delete("/data", (request, response) => {
  console.log(request.body.id);

  const newData = data.filter((e) => e.id !== request.body.id);
  data = newData;
  response.json(data);
});

app.post("/data", (request, response) => {
  console.log(request.body);
  counter++;
  const newData = {
    id: counter,
    name: request.body.name,
    major: request.body.major,
  };
  data = [...data, newData];
  response.json(data);
});

app.put("/data", (request, response) => {
  console.log(request.body);
  console.log(request.body.id);

  // ----------- Method 1 ---------------
  // const newData = data.filter((a) => a.id !== request.body.id);
  // data = [...newData, request.body];

  // ----------- Method OK ---------------
  data = data.map((d) => {
    if (d.id === request.body.id) {
      d.name = request.body.name;
      d.major = request.body.major;
    }
    return d;
  });

  response.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
