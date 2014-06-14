var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var categorySchema = Schema({
    title : String,
    keywords : {
        type : [{
            keyword : String,
            weight : Number,
        }],
        index : true
    },
});

// create the model for categorys and expose it to our app
module.exports = mongoose.model('category', categorySchema);