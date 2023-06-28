const express = require("express");
const {
  getAllUser,
  updateData,
  deleteData,
  addNewUser,
} = require("../controller/users");
const router = express.Router();

router.get("/", getAllUser);

router.post("/", addNewUser);

router.patch("/:id", updateData);

router.delete("/:id", deleteData);
module.exports = router;
