var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var Schema = schema({
    first_name : String,
    last_name : String,
    gender: String,
    email : String,
    phone : Number,
    password : String,
    spots : {type : [{type : schema.ObjectId, ref : 'Spot'}], index : true},
    piggybacks : {type : [{type : schema.ObjectId, ref : 'Piggyback'}], index : true},
    hopons : {type : [{type : schema.ObjectId, ref : 'Hopon'}], index : true},
    arrivals : {type : [{type : schema.ObjectId, ref : 'Arrival'}], index : true},
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

// generating a hash
// Schema.statics.generatePasswordHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// Schema.methods.isPasswordValid = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// create the model for users and expose it to our app
module.exports = mongoose.model('User', Schema);