var express = require('express');
var postController = require('./api/v1/post')

var router = express.Router();

// home page
router.get('/', function (req, res) {
    res.send('hzjio.com')
});

//post
router.get('/posts', postController.index);

router.get('/post', postController.show);
router.post('/post', postController.create);
router.put('/post', postController.update);
router.delete('/post', postController.delete);

//tags

//users

//categorys

//comments



module.exports = router;
