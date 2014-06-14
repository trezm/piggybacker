var settings = require( '../../settings' );
var User = require( '../models/user.js' );

var create = function( user, callback ) {
    user.password = User.generatePasswordHash( user.password );
    var mongooseUser = new User( user );
    mongooseUser.save( callback );
}

var read = function( params, callback ) {
    User.findOne( params, callback );
}

var update = function( query, updates, callback ) {
    User.update( query, {$set: updates}, {}, callback );
}

module.exports.UserController = {
    create: create,
    read: read,
    update: update
}

module.exports.UserControllerRoutes = {

}
