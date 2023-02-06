console.log("Day-56-REST-API");

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { request } = require("http");
const { response } = require("express");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>EXPRESS REST API is running</h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }
    const timerData = JSON.parse(readData);
    // console.log(timerData);

    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.delete("/timers", (request, response) => {
  const body = request.body;
  console.log(body);
  console.log(body.id);
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    console.log(readObject);
    const filteredObject = readObject.filter((o) => o.id !== body.id);

    fs.writeFile(
      "./data/data.json",
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

app.post("/timers", (request, response) => {
  const body = request.body;
  console.log(body);
  const newTimer = {
    id: body.id,
    title: body.title,
    project: body.project,
    elapsed: body.elapsed,
  };

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(newTimer);

    fs.writeFile(
      "./data/data.json",
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

app.put("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.title = request.body.title), (d.project = request.body.project);
      }
      return d;
    });

    fs.writeFile(
      "./data/data.json",
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
