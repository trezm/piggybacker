var settings = require( '../settings.js' );

module.exports = function( app, passport ) {
    // General gets
    app.get( '/css/:cssFile', function( req, res ) {
    	res.sendfile( './app/views/css/' + req.params.cssFile );
    });
    
    app.get( '/js/:jsFile', function( req, res ) {
	res.sendfile( './app/views/js/' + req.params.jsFile );
    });

    app.get( '/bower/*', function( req, res ) {
	// Split into elements and remove the 'bower' part
	var pathArray = req.path.split( '/' );
	pathArray.shift();
	pathArray.shift();

	res.sendfile( './bower_components/' + pathArray.join( '/' ) );
    });

    app.get( '/*', function( req, res ) {
	res.sendfile( './web/' + req.path );
    });
}
