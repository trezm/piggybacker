var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    discounts : {type : [{type : schema.ObjectId, ref : 'Discount'}], index : true},
});

// create the model for hoponoffers and expose it to our app
module.exports = mongoose.model('Piggybackoffer', Schema);