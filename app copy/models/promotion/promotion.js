var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var promotionSchema = Schema({
    condition_id : ObjectId,
    piggybackoffer_id : ObjectId,
    hopon_id : ObjectId,
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    active: Boolean,
});

// create the model for promotions and expose it to our app
module.exports = mongoose.model('Promotion', promotionSchema);