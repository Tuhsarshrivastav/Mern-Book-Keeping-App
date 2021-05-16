const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbConnected = require("./config/dbConnect");
//Connected to MongoDb
dbConnected();

//Routes
//Users routes
app.post("/api/users/register", (req, res) => {
  res.send("register api");
});
app.post("/api/users/login", (req, res) => {
  res.send("login api");
});
app.put("/api/users/update", (req, res) => {
  res.send("update api");
});
app.delete("/api/users/:id", (req, res) => {
  res.send("delete api");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
