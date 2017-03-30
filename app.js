//配置
var config = require('./config')

var express = require('express');
var cors = require('cors');


var webhook = require('./git-webhook');
var webRouter = require('./web-router');
var apiRouterV1 = require('./api-router-v1');

var app = express();

app.use(express.static('public'));
app.use(express.static('files'));
app.use('/api/v1',cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200
}));

app.use('/webhook',webhook);

//routers
app.use('/',webRouter);
app.use('/api/v1',apiRouterV1);

var server = app.listen(config.port,function(){
    var port = server.address().port;
    var host = server.address().host;
    console.log('express app listening at http://%s:%s',host,port);
});

//为什么要exports？
module.exports = app;
