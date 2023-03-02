require('express-async-errors')
const express = require("express");
const cors = require("cors");
const { errorHandler } = require('./middlewares/error');
require('dotenv').config()
require('./db')
const userRouter = require("./routes/user");
const { handleNotFound } = require("./utils/helper");



const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/user", userRouter);
app.use("/*", handleNotFound);

app.use(errorHandler)


app.listen(4444, () => {
  console.log("the port is listening on port 4444");
});
