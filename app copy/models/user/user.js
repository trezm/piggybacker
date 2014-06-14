var settings = require('../../settings.js')
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = Schema({
    first_name : String,
    last_name : String,
    gender: String,
    email : String,
    phone : Number,
    password : String,
    spot_ids : {type : [ObjectId], index : true},
    piggyback_ids : {type : [ObjectId], index : true},
    hopon_ids : {type : [ObjectId], index : true},
    sitearrival_ids : {type : [ObjectId], index : true},
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// generating a hash
userSchema.statics.generatePasswordHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.isPasswordValid = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

