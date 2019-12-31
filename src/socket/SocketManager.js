const io = require("../server.js").io;

let connectedUsers = {};

module.exports = socket => {

    console.log('SocketId', socket.id);

    socket.on("login", (data) => {
        console.log(data)
    })
};