var express = require('express');
var process = require('child_process');
var birds = require('./birds');
var app = express();

app.use(express.static('public'));
app.use(express.static('files'));
app.use('/birds',birds);

app.get('/',function(req,res){
    res.send ('hello world!');
});

app.post('/git-pull',function(req,res){
    console.log(req);
    process.execFile('./git-pull.sh',function(error,stdout,stderr){
        console.log('exec error:' + error);
    })
});

app.post('/',function(req,res){
    res.send('Got a Post request');
});

app.put('/user',function(req,res){
    res.send('got a put request at /user');
});

app.delete('/user',function(req,res){
    res.send('Got a DELETE request at /user');
});

//app.route
app.route('/book')
.get(function(req,res){
    res.send('Get a random book');
})
.post(function(req,res){
    res.send('add a book');
})
.put(function(req,res){
    res.send('update the book');
});

var server = app.listen(3000,function(){
    var port = server.address().port;
    var host = server.address().host;

    console.log('express app listening ad http://%s:%s',host,port);
});
