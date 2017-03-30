var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect('127.0.0.1:27017',{
    server:{poolsize:20}
},function(err){
    console.log('connect to %s error: ', config.db, err.message);
});

//models
require('./post');

exports.Post = mongoose.model('Post');