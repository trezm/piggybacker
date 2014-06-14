var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    active : Boolean,
    uri : String,
    ip : String,
    user_agent : String,
    feeds_displayed : {type : [{type : schema.ObjectId, ref : 'Feed'}], index : true},
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// create the model for siteArrivals and expose it to our app
module.exports = mongoose.model('Arrival', Schema);