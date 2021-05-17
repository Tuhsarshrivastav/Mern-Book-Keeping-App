const express = require("express");
const app = express();
const error = require("./middlewares/ErrorMiddleware");
const dbConnected = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");
//Connected to MongoDb
dbConnected();

//Passing body data
app.use(express.json());

//Routes
app.use("/", userRoutes);

// Error handler
app.use(error.errorMiddlewareHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
