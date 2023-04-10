const express = require("express");
const appRouter = require("./routes/applicationRoutes");
const userRoutes = require("./routes/userRoutes");
const { dbConn } = require("./db_config/dbConnection");
const dotenv = require("dotenv").config();

//calling database connection
//dbConn();

const app = express();

app.use(express.json());
app.use("/api", appRouter);
app.use("/api/users", userRoutes);

const port = process.env.PORT || "5000";
app.listen(
  port,
  console.log(`AAMUSTED companion Server Running on port ${port}`)
);
