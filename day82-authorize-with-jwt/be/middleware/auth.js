const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("===============", req.user);
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Хэрэглэгч токен оруулах шаардлагатай",
    });
  }

  try {
    const decoded = jwt.verifyToken(token, "MySuperDuperPrivateKey");
    req.foundUser = decoded;
    return res.status(200).json({
      message: "Хэрэглэгчийн токен zuv",
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Хэрэглэгчийн токен буруу, эсвэл идэвхигүй байна.",
    });
  }
  return next;
};

module.exports = verifyToken;
