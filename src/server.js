const express = require("express");
const app = express();
const server = require("http").Server(app);

const io = (module.exports.io = require("socket.io")(server));
const mongoose = require("mongoose");

const user_routes = require("./routes/user");
const sesssion_routes = require("./routes/session");

require("custom-env").env();

app.use("/users", user_routes);
app.use("/sessions", sesssion_routes);

app.get("/", (req, res) => {
  res.send("Server On");
});

// var mongoose = require('mongoose');

// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(express.static(__dirname + '/../../build'));

const SocketManager = require("./socket/SocketManager");

io.on("connection", SocketManager);

const PORT = process.env.APP_PORT || 8081;
server.listen(PORT, () => {
  console.log("Connected to port:", PORT);
});
