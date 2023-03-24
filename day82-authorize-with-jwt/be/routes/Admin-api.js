const express = require("express");
const Users = require("../models/Users");
const UserRole = require("../models/UserRole");
const adminApiRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// adminApiRouter.post("/register", async (request, response) => {
//   const data = request.body;
//   console.log(data);
//   // if (data) {
//   //   const oldUser = await User.findOne({ email: email });
//   //   if (oldUser) {
//   //     return response.status(400).json({
//   //       success: false,
//   //       message: " User allready created",
//   //     });
//   //   }

//   //   const hashedPassword = await bcrypt.hash(data.password, 10);

//   //   data.password = hashedPassword;

//   //   try {
//   //     const user = await User.create(data);
//   //     const result = await user.populate("userRole");
//   //     response.status(201).json({
//   //       message: " User successfully created",
//   //       data: result,
//   //     });
//   //   } catch (error) {
//   //     response.status(500).json({
//   //       success: false,
//   //       error: error,
//   //     });
//   //   }
//   // }
// });

// register endpoint
adminApiRouter.post("/register", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        status: "Хэрэглэгч аль хэдийн үүссэн байна. Нэвтэрч орно уу.",
      });
    }
    var hashedPassword = await bcrypt.hash(data.password, 10);

    data.password = hashedPassword;

    try {
      const user = await Users.create(data);
      console.log("user created");
      const result = await user.populate("userRole");
      console.log("user populated");

      res.status(201).json({
        message: "Хэрэглэгч амжилттай үүслээ",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }

    // Users.create(data)
    //   .then((data) => {
    //     res.status(201).json({
    //       message: "Хэрэглэгч амжилттай үүслээ",
    //       data,
    //     });
    //     return;
    //   })
    //   .catch((error) => {
    //     res.status(500).json({
    //       success: false,
    //       error: error,
    //     });
    //   });
  } else {
    return res.json({
      error: "The input field is empty",
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

adminApiRouter.post("/role/create", async (req, res) => {
  const { name } = req.body;

  const result = await UserRole.create({ name });

  res.status(200).json({
    data: result,
  });
});

adminApiRouter.get("/role/list", async (req, res) => {
  const result = await UserRole.find({});

  res.status(200).json({
    data: result,
  });
});

module.exports = adminApiRouter;
