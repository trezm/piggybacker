 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var userSearchSchema = Schema({
    active : Boolean,
    feed_id : ObjectId,
    info : ,
    query : {
        literal : String,
        ordered_terms : {
            type : [{
                term : String,
                order : Number
            }],
            index : true,
        },
    },
    external_queries : [ObjectId],
    locations : [{location_id : Number}],
    piggybacks : [{piggyback_id : Number}],
    hopons : [{_hopon_id : Number}],
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// create the model for userSearchs and expose it to our app
module.exports = mongoose.model('UserSearch', userSearchSchema);

