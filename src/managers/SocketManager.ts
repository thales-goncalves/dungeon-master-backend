const io = require("../Server.ts").io;

let connectedUsers = {};

module.exports = socket => {

    console.log('SocketId', socket.id);

    socket.on("login", (data) => {
        console.log(data)
        socket.emit("rowDice", data );
    })
};