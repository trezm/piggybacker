var settings = require('../../settings.js')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 

var iconSchema = Schema({
    image_url : String,
});

// create the model for icons and expose it to our app
module.exports = mongoose.model('Icon', iconSchema);
