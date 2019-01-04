var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* The user schema and its attributes */

var ReviewsSchema = new Schema({
    username: String,
    title: String,
    description: String,
    content: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

module.exports = mongoose.model('review', ReviewsSchema);