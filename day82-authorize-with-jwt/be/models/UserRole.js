const mongoose = require("mongoose");
const User = require("./Users");

// Admin хэрэглэгч бол бүх эрхтэй хэрэглэгч байна
// Customer хэрэглэгч бол Админ руу нэвтрэхгүй
// User хэрэглэгч нь зарим нэг Админ Панел дээр устгах өөрчлөх эсвэл үүсгэх эрхгүй хэрэглэгч байна.
const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Role Name"],
    unique: true,
  },
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

module.exports = UserRole;
