const express = require("express");
const app = express();
const userRouter = require("./routes/users.js");
const { logs } = require("./middleware/logs.js");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(logs);

app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => {
  try {
    console.log(`server berjalan di ${PORT}`);
  } catch (err) {
    console.log(`Server error:${err.message}`);
  }
});
