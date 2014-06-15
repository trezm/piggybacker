var PromotionControllerSocket = require( '../app/controllers/promotion_controller.js' ).PromotionControllerSocket;

module.exports = function( io ) {
	io.sockets.on( 'connection', function(socket) {
		PromotionControllerSocket( socket );
	});
}