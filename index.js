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