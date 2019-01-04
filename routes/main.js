var router = require('express').Router();

var Review = require('../models/review');


router.get('/', function (req, res, next) {
    Review.find({},function (err,Review) {
        if (err) return next(err);
        res.render('main/home', { review: Review });
    });
});

router.get('/create', function (req, res, next) {
        res.render('main/create');
});



router.post('/create', function (req, res, next) {
    review = new Review();
    review.title=req.body.title,
    review.username=req.body.username,
    review.description=req.body.description,
    review.content=req.body.content,

    review.save(function (err,review) {
        if (err) return next(err);
        return res.redirect('/');
    });
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