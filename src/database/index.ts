export {};

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dmaster:dmaster@cluster01-gnpv7.mongodb.net/dungeon-master?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log("Mongo Connected");
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
