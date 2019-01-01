var router = require('express').Router();




router.get('/', function (req, res) {
    res.render('main/home');
});

router.get('/about', function (req, res) {
    res.render('main/about');
});


router.get('/posts',function(req,res) {
    res.render('main/posts');
});


router.get('/contact',function(req,res) {
    res.render('main/contact');
});


module.exports = router;