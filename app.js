var settings = require( './settings.js' );
var mongoose = require( 'mongoose' );
var passport = require( 'passport' );
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var cookieParser = require( 'cookie-parser' );
var session = require( 'express-session' );

mongoose.connect( settings.MONGO_URL );

var configure = function( app ) {
    app.use(cookieParser());
    app.use(bodyParser());

    /*
    // Passport related stuff
    app.use(session({ secret: 'straightchumpin' }));
    app.use(passport.initialize());
    app.use(passport.session());
    */
};

var router = require( './config/routes.js' )
router( app, passport );
configure( app );

var server = app.listen( settings.PORT );
var io = require('socket.io').listen(server);

var socket = require( './config/socket.js' );
socket( io );

console.log( "Starting server..." );
