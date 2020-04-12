const mongoose = require("../database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  socketId: String
});

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
  next();
});

module.exports = mongoose.model("User", UserSchema);
