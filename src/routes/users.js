const express = require("express");
const { UserController } = require("../controller/users");
const router = express.Router();

router.get("/", UserController.getAllUsers);

router.post("/", addNewUser);

router.patch("/:id", updateData);

router.delete("/:id", deleteData);
module.exports = router;
