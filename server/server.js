
//To get to the public it is easier to use a builtin module
//console.log(__dirname + /../public);
//console.log();

const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;

var app = express();
//A middleware is basically a function that will the receive the Request and Response objects,
//just like your route Handlers do.

//As a third argument you have another function which you should call once your middleware code completed.
app.use(express.static(publicPath));


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
