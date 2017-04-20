const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PostSchema= new Schema({
    title:{
        type:String,
        require:true
    },
    content:String,
    author:String,
    category:{
        type:ObjectId,
        ref:'Category'  //关联category文档的_id
    },
    tag:String,
    createIime:{
        type:Date,
        default:Date.now
    },
},{
    connection:'Post'
})


mongoose.model('Post',PostSchema);