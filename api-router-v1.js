var express = require('express');

var router = express.Router();

// home page
router.get('/', function (req, res) {
    res.send('hzjio.com')
});

//posts
router.get('/posts', function (req, res) {
    res.json({
        code: 0,
        data: [
            { id: 1 },
            { id: 2 }
        ]
    });
});


router.post('/posts', function (req, res) {
    res.send('post posts');
});

router.get('/post/', function (req, res) {
    console.log(req);
    res.send('request post');
});

router.post('/post', function (req, res) {
    res.send('post post');
});
router.delete('/post', function (req, res) {
    res.send('delete post')
});

//tags

//users

//categorys

//comments



module.exports = router;