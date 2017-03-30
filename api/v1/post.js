// var models = require('../../models');
// var postsModel = models.Posts;

var index = function(req,res,next){
    res.send('posts index')
}


var show = function(req,res,next){
    res.send("posts show");
}


var create = function(req,res,next){
    res.send("posts create");
}


var update = function(req,res,next){
    res.send("post update");
}

var remove = function(req,res,next){
    res.send("post delete");
}



exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.delete = remove;