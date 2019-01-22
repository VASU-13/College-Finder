var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;
var collegereviews = new Schema({
    username:String,
    collegename:String,
    rtitle: String,
    content: String,
    year: Number,
    branch: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }

});
collegereviews.plugin(mongoosastic, {
    hosts: [
        'localhost:9200'
    ]
});


module.exports = mongoose.model("collegereviews",collegereviews);
