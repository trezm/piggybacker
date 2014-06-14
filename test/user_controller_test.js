var settings = require( '../settings.js' );
var mongoose = require( 'mongoose' );
var expect = require( "chai" ).expect;
var User = require( '../app/models/user.js' );
var UserController = require( '../app/controllers/user_controller.js' ).UserController;

Date.soon = function() {
    return new Date( Date.now() + 24 * 60 * 60 * 1000 );
}

describe( "UserController", function() {
    var user;

    before( function() {
	mongoose.connect( settings.MONGO_URL );
    });

    beforeEach( function( done ) {
	// Sanitize the database
	for ( var i in mongoose.connection.collections ) {
	    mongoose.connection.collections[ i ].remove( function() {
	    }); 
	}
	
	done();
    });

    after( function( done ) {
	mongoose.connection.close(function() {
	    done();
	});
    });

    it ( 'should have a create method', function() {
	expect( UserController ).to.respondTo( 'create' );
    });

    it ( 'should create with a hashed, valid password', function(done) {
	var password = 'abceasyas123';
	var email = 'test@example.com';
	UserController.create( {email: email, password: password, passwordConfirmation: password}, function( error, results ) {
	    UserController.read( {email: email}, function( error, results ) {
		expect( results.password ).to.not.equal( password );
		expect( results.isPasswordValid( password ) ).to.be.true;
		done();
	    });
	});
    });

    it ( 'should have a read method', function() {
	expect( UserController ).to.respondTo( 'read' );
    });

    it ( 'should return the correct object', function(done) {
	var password = 'abceasyas123';
	var email = 'test@example.com';
	UserController.create( {email: email, password: password, passwordConfirmation: password}, function( error, results ) {
	    UserController.read( {email: email}, function( error, results ) {
		expect( results.email ).to.equal( email );
		done();
	    });
	});
    });

    it ( 'should have an update method', function() {
	expect( UserController ).to.respondTo( 'update' );
    });

    it ( 'should update the email properly', function(done) {
	var password = 'abceasyas123';
	var email = 'test@example.com';
	UserController.create( {email: email, password: password, passwordConfirmation: password}, function( error, results ) {
	    var alteredEmail = 'asdfasdfasdf123';
	    UserController.update( {email: email}, {email: alteredEmail}, function( error, results ) {
		UserController.read( {email: alteredEmail}, function( error, results ) {
		    expect( results.email ).to.equal( alteredEmail );
		    done();
		});
	    });
	});
    });
})
