var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
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
module.exports = mongoose.model('Category', Schema);