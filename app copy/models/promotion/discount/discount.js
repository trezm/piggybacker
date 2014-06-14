var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var discountSchema = Schema({
    absolute_amt : Number, // absolute amount of the reduction of the item's price, a positive integer
    absolute_perc : Number, // absolute percentage of the item's price that is subtracted; a positive number such that 15 means a 15% reduction
    absolute_purchase_floor : Number, // minimum total purchase amount to qualify for the discount
    absolute_purchase_ceil : Number, // maximum total purchase amount to qualify for the discount
    qualifying_items : {type : [ObjectId], index : true},
});

// create the model for discounts and expose it to our app
module.exports = mongoose.model('Discount', discountSchema);