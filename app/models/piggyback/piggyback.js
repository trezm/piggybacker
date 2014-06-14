var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    active : Boolean, // whether the piggyback is currently available 
    // creator : userSchema, // id of the user who created the piggyback
    promotion : {type : schema.ObjectId, ref : 'Promotion'}, 
    hopons : {type : [{type : schema.ObjectId, ref : 'Hopon'}], index : true},
    loc: {
      type: { type: String },
      coordinates: [Number],
    },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },  
});

// piggybackSchema.index({ loc: '2dsphere' });
// piggybackSchema.index({ loc: '2dsphere' });

// create the model for piggybacks and expose it to our app
module.exports = mongoose.model('Piggyback', Schema);