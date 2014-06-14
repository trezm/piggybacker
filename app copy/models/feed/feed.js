var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var feedSchema = Schema({
    piggybacks_displayed : [{
        id : ObjectId, 
        order : Number,
        hopon : {
            was : Boolean,
            id : {type : ObjectId, default : 0},
    }],
    user_searches : [{
        id : ObjectId, 
        order : Number,
    }],
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    active : Boolean,
});

// create the model for feeds and expose it to our app
module.exports = mongoose.model('Feed', feedSchema);