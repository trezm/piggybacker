var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var hoponSchema = Schema({
    piggyback_id : ObjectId,
    created_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    active : Boolean,    
});

hoponSchema.index({ piggyback_id: 1});

// create the model for hopons and expose it to our app
module.exports = mongoose.model('Hopon', hoponSchema);
