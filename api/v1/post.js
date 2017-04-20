var models = require('../../models');
var postsModel = models.Post;

var index = function(req,res,next){
    postsModel.find({},{},{},function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        } 
    })
}


var show = function(req,res,next){  
    postsModel.find({"_id":req.params.id},{},{},function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}


var create = function(req,res,next){
    var postEntity = new postsModel({
        title:"title"
    });
    postEntity.save(function(err, post){
        if(err){
            res.send(err);
        }else{
            res.send(post);
        }
    });
}
 

var update = function(req,res,next){
    postsModel.findByIdAndUpdate(req.params.id,{$set:{title:"ni ta ma de "}},function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

var remove = function(req,res,next){
    postsModel.findByIdAndRemove(req.params.id,{},function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}



exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.delete = remove;