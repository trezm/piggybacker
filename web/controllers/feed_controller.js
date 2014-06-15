var now = new Date();
var sevenDays = (new Date()).setDate(now.getDate() + 7);
var inFifteenMinutes = (new Date()).setMinutes(now.getMinutes() + 15);

// To be removed later
var socket = io();
var feedDisplayQuantity = 1;
var feedDisplayQuantityMax = 5;

app.controller('FeedController', function($scope) {
	console.log( feedDisplayQuantity );
	this.feedDisplayQuantity = feedDisplayQuantity;
	this.feedDisplayQuantityMax = feedDisplayQuantityMax;
	this.promotions = [];

	var self = this;
	this.interval = setInterval(function() {
		console.log( self.feedDisplayQuantity );
		console.log( self.promotions );
		self.feedDisplayQuantity++;
		self.feedDisplayQuantity = self.feedDisplayQuantity + 1 > feedDisplayQuantityMax ? 1 : self.feedDisplayQuantity;
		$scope.$apply();
	}, 5000)

	var self = this;
	// Retrieve promotions
	socket.emit('ReadPromotion', {});
	socket.on('PromotionRead', function(data) {
		self.promotions = data.results;
		$scope.$apply();
	});
});