var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    condition : {type : schema.ObjectId, ref : 'Condition'},
    piggybackoffer : {type : schema.ObjectId, ref : 'Piggybackoffer'},
    hoponoffer : {type : schema.ObjectId, ref : 'Hoponoffer'},
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    active: Boolean,
});

// create the model for promotions and expose it to our app
module.exports = mongoose.model('Promotion', Schema);