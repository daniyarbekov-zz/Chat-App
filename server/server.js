
//To get to the public it is easier to use a builtin module
//console.log(__dirname + /../public);
//console.log();

const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;
const socket = require('socket.io');

const http = require('http');

var app = express();
//A middleware is basically a function that will the receive the Request and Response objects,
//just like your route Handlers do.

//As a third argument you have another function which you should call once your middleware code completed.

var server = http.createServer(app);
//this is how we are communicating with our server
var io = socket(server);



app.use(express.static(publicPath));

//we registeer an event and listen to it

io.on('connection', (socket) =>{
  console.log('new user connected');


  socket.on('createMessage', (newMessage) =>{
    console.log('createMessage', newMessage);
    io.emit('newMessage',{
      from:newMessage.from,
      text:newMessage.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () =>{
    console.log('user was disconnected');
  });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
