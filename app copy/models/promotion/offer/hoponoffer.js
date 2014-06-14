var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var hoponofferSchema = Schema({
    discount_ids : {type : [ObjectId], index : true},
});

// create the model for hoponoffers and expose it to our app
module.exports = mongoose.model('Hoponoffer', hoponofferSchema);
