const fs = require('fs');
const express = require('express');
const cors = require('cors');

//配置
const config =  require('./config');


// //mongooose
// mongoose.connect('mongodb://127.0.0.1:27017/hzjio_blog_dev',function(err){
//   if(err){
//     console.log(err);
//     process.exit(1);
//   } 
// })



const webhook = require('./git-webhook');
const webRouter = require('./web-router');
const apiRouterV1 = require('./api-router-v1');

const app = express();

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

module.exports = app;
