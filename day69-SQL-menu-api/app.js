console.log("-----------------DAY-69---------------");

import express from "express";
import admin from "./routes/admin.js";
import apiRouter from "./routes/apiRouter.js";
import cors from "cors";
import emp_router from "./routes/api.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/admin", admin);
app.use("/api", apiRouter);
app.use("/api", emp_router);

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align: center; background-color: orange'>DAY-69</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Espress server running on http://localhost:${PORT}`);
});
