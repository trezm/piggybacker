var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var piggybackSchema = Schema({
    active : Boolean, // whether the piggyback is currently available 
    creator_id : ObjectId, // id of the user who created the piggyback
    promotion_id : ObjectId, // id of the promotion the piggyback refers to
    hopons : {type : [ObjectId], index : true},
    loc: {
      type: { type: String }
    , coordinates: [Number]
    },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },  
});

piggybackSchema.index({ loc: '2dsphere' });
piggybackSchema.index({ loc: '2dsphere' });


// create the model for piggybacks and expose it to our app
module.exports = mongoose.model('Piggyback', piggybackSchema);
