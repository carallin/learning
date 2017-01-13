var express = require('express');
// var router = express.Router();
var router = express.Router();

router.get('/',function(req, res) {
    res.render('index');
});
router.get('/about', function (req, res) {
    res.send('about page!Haha');
});
router.get('/about/:name', function (req, res) {
    res.send('about' + req.params.name);
});

module.exports = router;


// 该例子的说明：https://github.com/nswbmw/N-blog/blob/master/book/3.2%20%E8%B7%AF%E7%94%B1.md
