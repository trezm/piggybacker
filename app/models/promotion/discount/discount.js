var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    price_reduction_amt : Number, // absolute amount of the reduction of the item's price, a positive integer
    price_reduction_perc : Number, // absolute percentage of the item's price that is subtracted; a positive number such that 15 means a 15% reduction
    price_floor : Number, // minimum total purchase price to qualify for the discount
    price_ceil : Number, // maximum total purchase price to qualify for the discount
    purchase_num_floor : Number, // minimum total number or purchase items to qualify for the discount
    purchase_num_ceil : Number, // maximum total number or purchase items to qualify for the discount
    qualifying_items : {type : [{type : schema.ObjectId, ref : 'Item'}], index : true},
});

// create the model for discounts and expose it to our app
module.exports = mongoose.model('Discount', Schema);