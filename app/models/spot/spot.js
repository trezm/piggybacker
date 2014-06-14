var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    active : Boolean,
    name : String, // home, office, etc.
    icon : {type : schema.ObjectId, ref : 'Icon'},
    address : String,
    city : String,
    state : String,
    zip : String,
    country_code : String,
    loc: {
      type: { type: String }
    , coordinates: [Number]
    },
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// Schema.index({ loc: '2dsphere' });

// create the model for spots and expose it to our app
module.exports = mongoose.model('Spot', Schema);