# MEAN_Buoi04_socket.io
Learning MEAN full stack, socket.io

Init project

$ npm init

Install packages:
- body-parser: Node.js body parsing middleware.
- ejs: Embedded JavaScript templates
- express: Fast, unopinionated, minimalist web framework for node.
- multer: a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
- socket.io: Socket.IO enables real-time bidirectional event-based communication. It consists of: 
+ a Node.js server (this repository)
+ a Javascript client library for the browser (or a Node.js client)

$ npm install body-parser ejs express multer socket.io

* Register app:
- port at localhost:3000
- floder public as localhost:3000/
- folder views have page (html) to view
- send 'hello' to localhost:3000

//index.js

var express = require('express');
var app = express();

//set view pages in views
//set public floder as root
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('public'))

//setting
//body-paser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

//soket.io
var server = require("http").Server(app);
var io = require("socket.io")(server);
//port 
server.listen(3000)


app.get('/', function(req,res){
    res.send('hello')
})

cd to project folder:
$ node index.js
Open browser at localhost:3000 to see 'hello' display by res.send('hello')
