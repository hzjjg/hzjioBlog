const mongoose = require('mongoose');
const config = require('../config');

//mongooose
mongoose.connect('mongodb://127.0.0.1:27017/hzjio_blog_dev',function(err){
  if(err){
    console.log(err);
    process.exit(1);
  }
})

//models
require('./post');

exports.Post = mongoose.model('Post');
