const express = require("express");
const {
  createUser,
  getAllUsers,
  updateData,
  deleteData,
} = require("../controller/users");
const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.patch("/:id", updateData);

router.delete("/:id", deleteData);
module.exports = router;
