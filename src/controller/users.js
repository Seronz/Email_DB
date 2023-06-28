const { UserModel } = require("../models/users");

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

const addNewUser = async (req, res) => {
  const { body } = req.body;
  try {
    await UserModel.addNewUsers(body.name);
    res.json({
      message: "Add user success",
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't add user`,
      ServerMessage: `${err.message}`,
    });
  }
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
module.exports = {
  getAllUsers,
  addNewUser,
  updateData,
  deleteData,
};
