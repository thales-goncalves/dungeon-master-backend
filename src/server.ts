export {};

const express = require("express");
const app = express();
const server = require("http").Server(app);

const io = (module.exports.io = require("socket.io")(server));

const user_routes = require("./routes/user");
const sesssion_routes = require("./routes/session");

require("custom-env").env();

app.use(express.json());
app.use("/users", user_routes);
app.use("/sessions", sesssion_routes);

app.get("/", (req, res) => {
  res.send("Server On");
});

const SocketManager = require("./managers/SocketManager");

io.on("connection", SocketManager);

const PORT = process.env.APP_PORT || 8081;
server.listen(PORT, () => {
  console.log("Connected to port:", PORT);
});
