var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var piggybackofferSchema = Schema({
    discount_ids : {type : [ObjectId], index : true},
});

// create the model for piggybackoffers and expose it to our app
module.exports = mongoose.model('Piggybackoffer', piggybackofferSchema);
