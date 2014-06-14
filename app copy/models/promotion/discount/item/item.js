var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var itemSchema = Schema({
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
module.exports = mongoose.model('Item', itemSchema);