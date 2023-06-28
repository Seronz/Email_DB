const dbPool = require("../config/database");

const getAllUsers = (req, res) => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllUsers };
