var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');
 
var Schema = schema({
    image_url : String,
});

// create the model for icons and expose it to our app
module.exports = mongoose.model('Icon', Schema);