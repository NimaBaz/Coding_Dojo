/*
    M = MongoDB
    E = Express
    R = React
    N = Nodejs
*/

//import express and store express in a variable
const express = require("express")
const cors = require('cors');

//initialize the express application and store it in a variable called 'app'
const app = express()

//intialize the port to 8000
const port = 8000

//allow the application to parse json data (form information)
//allow the application to accept form information
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//import mongoose
require('./config/mongoose.config')

//imort our routes
const Routes = require('./routes/users.routes')
Routes(app)

const server = app.listen(port, () => console.log(`Established a Death Star connection on port: ${port}`));

const io = require("socket.io")(server, { cors: true });

io.on("connection", socket => {
    console.log(socket.id)
    socket.on("chat", (client_input) => {
        console.log("got a messasge", client_input)
        io.emit("post chat", client_input)
    })
})

