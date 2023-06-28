const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();
    res.json({
      message: "Get all user success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't get all user `,
      ServerMessage: `${err.message}`,
    });
  }
};

const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "create user success",
    data: req.body,
  });
};

const updateData = (req, res) => {
  const { id } = req.params;
  console.log(id);

  res.json({ message: "update user success", data: req.body });
};

const deleteData = (req, res) => {
  const { id } = req.params;
  res.json({ message: "berhasil menghapus data", data: req.body });
};
module.exports = { getAllUsers, createUser, updateData, deleteData };
