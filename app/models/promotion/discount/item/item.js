var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    title : {
        literal : String,
        ordered_terms : {
            type : [{
                term : String,
                order : Number
            }],
            index : true,
        },
    },
    price : Number,
    keywords : {
        type : [{
            keyword : String,
            weight : Number,
        }],
        index : true
    },
});

// create the model for items and expose it to our app
module.exports = mongoose.model('Item', Schema);