var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    piggybacks_displayed : {
        type : [{
            piggyback : {type : schema.ObjectId, ref : 'Piggyback'}, 
            order : Number,
            hopons : [{type : schema.ObjectId, ref : 'Hopon'}],
        }],
        index : true,
    },
    // user_searches : ,
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    active : Boolean,
});

// create the model for feeds and expose it to our app
module.exports = mongoose.model('Feed', Schema);