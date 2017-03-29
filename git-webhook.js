/**
 * webhook 用于github收到push 之后，向服务器发送请求来执行
 * 从版本库pull 最新代码
 */

var express = require('express');
var router = express.Router();
var process = require('child_process');

router.post('/git-pull',function(req,res){
    process.execFile('./git-pull.sh',function(error,stdout,stderr){
       res.send('exec error:' + error);
    });
    res.send('updating website');
});

module.exports = router;