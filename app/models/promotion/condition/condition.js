var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    max_piggyback_radius : Number,
    max_hopon_radius : Number,
    max_total_distance : Number,
    min_qualifying_hopons : Number,
    max_qualifying_hopons : Number,
    time_last : Number,
});

// create the model for conditions and expose it to our app
module.exports = mongoose.model('Condition', Schema);