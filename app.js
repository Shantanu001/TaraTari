var express = require('express');
var app = express();
var path = require('path');
app.set('view engine','ejs');
/*app.get('/contact',function(req,res){
    res.send("You are inside a index page");
});

app.get('/profile:id',function(req,res){
    res.send("You have requested for id"+req.params.id);
});*/

app.use(express.static(path.join(__dirname,'public')));

app.get('/index.ejs',function(req,res){
    //res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/signup.ejs',function(req,res){
    //res.sendFile(__dirname + '/signup.html');
    res.render('signup');
});

app.listen(8080);