var socket = io();

socket.on('connect', function (){
  console.log('connected to server');

});

socket.on('disconnect', function (){
  console.log('disconneted from server');
});

// will be printed every time client hears new email coming across the pipeline
socket.on('newMessage', function(message){
  console.log(message);
});
