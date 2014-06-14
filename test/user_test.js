var settings = require( '../settings.js' );
var mongoose = require( 'mongoose' );
var expect = require( "chai" ).expect;
var User = require( '../app/models/user.js' );

describe( "User", function() {
    var user;
    
    before( function() {
	mongoose.connect( settings.MONGO_URL );
    });

    after( function( done ) {
	mongoose.connection.close( function() {
	    done();
	});
    });

    beforeEach( function(done) {
	// Clean out the database before each
	for ( var i in mongoose.connection.collections) {
	    mongoose.connection.collections[ i ].remove( function() {} );
	}

	user = new User();
	user.password = 'abceasyas123';
	user.email = 'test@example.com';
	user.save( function( error, result ) {
	    User.findOne( {_id: result._id}, function( error, result ) {
		user = result;
		done();
	    });
	});
    });

    it ( 'should have a password field', function() {
	expect( user ).to.have.property( 'password' );
    });
    
    it ( 'should have an email field', function() {
	expect( user ).to.have.property( 'email' );
    });

/*    
    it ( 'should have a generatePasswordHash function', function() {
	    expect( User ).to.respondTo( 'generatePasswordHash' );
    });
*/
    it ( 'should have a isPasswordValid function', function() {
	    expect( user ).to.respondTo( 'isPasswordValid' );
    });
})
