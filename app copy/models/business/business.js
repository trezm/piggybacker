var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var businessSchema = Schema({
    yelp_id : String,
    categories : [{
        type : {
            id : ObjectId,
            weight : Number,
        },
        index : true,
    }],
    concact_first_name : String,
    concact_last_name : String,
    name : String,
    city : String,
    state : String,
    zip : String,
    loc: {
      type: { type: String }
    , coordinates: [Number]
    },
    icon_img_url : String, // url of icon image for business 
    business_url : String, // url of business's home page
    promotions: {type : [ObjectId], index : true},
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    active : Boolean,
});

businessSchema.index({ city: 1});
businessSchema.index({ zip: 1});

// create the model for businesss and expose it to our app
module.exports = mongoose.model('Business', businessSchema);