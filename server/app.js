// for initializing express app
const express = require("express");
// function to connect with databse
const { connectDB } = require("./db/connection");
// for using the envioronment variable through out the application
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

// application middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes for authentication - candidate and recruiter
// const authRoute = require("./routes/auth");
const authRoute = require("./routes/auth");

// application route setup - authenticatoin
app.use("/api/auth", authRoute);

// database connection and running the server app
const connect = async () => {
  // connecting the db
  await connectDB();
  // runniing the application
  app.listen(4000, () => {
    console.log(`server is running at ${PORT}`);
  });
};

connect();