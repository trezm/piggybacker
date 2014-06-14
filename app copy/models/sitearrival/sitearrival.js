var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var siteArrivalSchema = Schema({
    active : Boolean,
    uri : String,
    ip : String,
    user_agent : String,
    user_id : ObjectId,
    feeds_displayed : {type : [ObjectId], index : true},
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// create the model for siteArrivals and expose it to our app
module.exports = mongoose.model('SiteArrival', siteArrivalSchema);

