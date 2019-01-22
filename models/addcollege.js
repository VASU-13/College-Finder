var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollegeSchema = new Schema({
    cname: { type:String, unique:true, lowercase:true},
    desig: {type:String},
    rname: { type:String}
});


module.exports = mongoose.model("AddCollege",CollegeSchema);