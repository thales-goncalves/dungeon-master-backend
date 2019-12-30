const express = require('express')
const server = express()

const user_routes = require('./routes/user')
const sesssion_routes = require('./routes/session')

require ('custom-env').env()

server.use('/users', user_routes)
server.use('/sessions', sesssion_routes)

server.get('/', (req, res) => {
    res.send("Server On")
})


// var mongoose = require('mongoose');

// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.listen(process.env.APP_PORT)