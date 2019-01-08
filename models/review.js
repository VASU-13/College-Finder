var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* The user schema and its attributes */

var ReviewsSchema = new Schema({
    username: String,
    collegename: String,
    rtitle: String,
    content: String,
    year: Number,
    branch: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

module.exports = mongoose.model('review', ReviewsSchema);