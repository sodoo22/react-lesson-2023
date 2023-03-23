const express = require("express");
const User = require("../models/Users");
const adminApiRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminApiRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;

  if (password && email) {
    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
      return response.status(500).json({
        message: " User allready created",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    User.create({ email: email, password: hashedPassword })
      .then((data) => {
        response.status(201).json({
          message: " User successfully created",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        response.status(500).json({
          success: false,
          error,
        });
      });
  } else {
    response.status(200).json({
      error: "input field is empty",
    });
  }
});

adminApiRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!(password && email)) {
      return response.status(400).json({
        message: "Утгуудыг бүрэн оруулна уу",
      });
    }
    const user = await User.findOne({ email: email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user?.password);

      if (user && isMatch) {
        const jwtBody = { user_id: user._id, email: email };
        const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", {
          expiresIn: "24",
        });
        return response.status(200).json({
          success: true,
          token: token,
        });
      }
    } else {
      return response.status(400).json({
        success: false,
        status: "Нууц үг нэр хоорондоо таарахгүй байна",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({
      data: "aldaa garlaa",
      error: error,
    });
  }
});

module.exports = adminApiRouter;
