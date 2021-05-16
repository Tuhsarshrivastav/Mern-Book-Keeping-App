const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://mern:mern@cluster0.opvaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
      }
    )
    .then(() => {
      console.log("Database is Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = dbConnect;
