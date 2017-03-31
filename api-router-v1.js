var express = require('express');
var postController = require('./api/v1/post')

var router = express.Router();

// home page
router.get('/', function (req, res) {
    res.send('hzjio.com')
});

//post
router.get('/posts', postController.index);
router.post('/posts', postController.create);
router.get('/posts/:id', postController.show);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.delete);

//tags

//users

//categorys

//comments



module.exports = router;
