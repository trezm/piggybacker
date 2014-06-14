var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var spotSchema = Schema({
    active : Boolean,
    user_id : ObjectId, // id of the user associated with the spot
    name : String, // home, office, etc.
    icon_id : ObjectId, 
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

spotSchema.index({ loc: '2dsphere' });

// create the model for spots and expose it to our app
module.exports = mongoose.model('Spot', spotSchema);
