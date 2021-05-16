const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbConnected = require("./config/dbConnect");
const userRoutes = require('./routes/userRoutes')
//Connected to MongoDb
dbConnected();

//middlewares
app.use(express.json());

//Routes
//Users routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
