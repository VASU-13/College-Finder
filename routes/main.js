var router = require('express').Router();

var Review = require('../models/review');


router.get('/', function (req, res, next) {
    Review.find({},function (err,review) {
        if (err) return next(err);
        res.render('main/home', { review: review });
    });
});



router.get('/posts', function (req, res, next) {
    Review.find({ }, function (err, review) {
        if (err) return next(err);
        res.render('main/posts', { review: review });
    });
});


router.get('/create', function (req, res, next) {
        res.render('main/create', {message: req.flash('success') });
});



router.post('/create', function (req, res, next) {
    review = new Review();
    review.rtitle=req.body.rtitle,
    review.username=req.body.username,
    review.content=req.body.content,
    review.year=req.body.year,
    review.branch=req.body.branch,
    review.collegename = req.body.collegename

    review.save(function (err,review) {
        if (err) return next(err);
        req.flash("success","Thanks for posting a review");
        return res.redirect('/create');
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