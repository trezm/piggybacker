var now = new Date();
var sevenDays = (new Date()).setDate(now.getDate() + 7);
var inFifteenMinutes = (new Date()).setMinutes(now.getMinutes() + 15);

// To be removed later
var socket = io();
var feedDisplayQuantity = 5;

app.controller('FeedController', function($scope) {
	this.feedDisplayQuantity = feedDisplayQuantity;
	this.promotions = [];

	var self = this;
	// Retrieve promotions
	socket.emit('ReadPromotion', {});
	socket.on('PromotionRead', function(data) {
		self.promotions = data.results;
		$scope.$apply();
	});
});