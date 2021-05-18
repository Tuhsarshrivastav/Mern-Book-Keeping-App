const mongoose = require('mongoose');

const dbConnect = () => {
  //connect DB
  mongoose
    .connect("mongodb+srv://mern:mern@cluster0.opvaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then(() => console.log('Db Connected'))
    .catch(err => console.log(err));
};

module.exports = dbConnect;
