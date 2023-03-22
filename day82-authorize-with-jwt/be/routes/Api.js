const express = require("express");
const auth = require("../middleware/auth");

const apiRouter = express.Router();

apiRouter.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: "Successfully got the protected route",
  });
});

apiRouter.post("/unprotected", (request, response) => {
  response.status(200).json({
    data: "Successfully got the uprotected route",
  });
});

module.exports = apiRouter;
