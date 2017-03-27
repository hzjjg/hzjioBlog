//rotuer中间件路由系统

var express = require('express');
var router = express.Router();

router.use(function timeLog(req,res,next){
    console.log('time:',Date.now());
    next();
});

router.get('/',function(req,res){
    res.send('Birds home page after update');
});

router.get('/about',function(req,res){
    res.send('about birds');
});



module.exports = router;  