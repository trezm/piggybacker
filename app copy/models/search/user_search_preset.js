var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var searchSchema = Schema({
    active : Boolean,
    feed_id : ObjectId,
    preset 
    email : String,
    phone : Number,
    password : String,
    locations : [{location_id : Number}],
    piggybacks : [{piggyback_id : Number}],
    hopons : [{_hopon_id : Number}],
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// create the model for searchs and expose it to our app
module.exports = mongoose.model('Search', searchSchema);

