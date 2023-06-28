const { getAllUsers, addNewUsers } = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [data] = await getAllUsers();
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
  const { body } = req;
  try {
    await addNewUsers(body);
    res.json({
      message: "Add user success",
      data: body,
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
  getAllUser,
  addNewUser,
  updateData,
  deleteData,
};
