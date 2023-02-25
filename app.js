require('express-async-errors')
const express = require("express");
const { errorHandler } = require('./middlewares/error');
require('dotenv').config()
require('./db')
const userRouter = require("./routes/user");

const app = express();
app.use(express.json())
app.use("/api/user", userRouter);
app.use(errorHandler)


app.listen(4444, () => {
  console.log("the port is listening on port 4444");
});
