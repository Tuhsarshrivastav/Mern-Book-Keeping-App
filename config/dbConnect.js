const mongoose = require('mongoose');

const dbConnect = () => {
  //connect DB
  mongoose
    .connect("", {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then(() => console.log('Db Connected'))
    .catch(err => console.log(err));
};

module.exports = dbConnect;
