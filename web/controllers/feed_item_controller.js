// To be removed later
var socket = io();

var getPiggybackOffer = function(offerId) {
	socket.emit('ReadPiggybackOffer', {_id: offerId});
	socket.on('PiggybackOfferRead', function(data) {
		console.log( 'piggyback:', data );
		if (data.results.length) {
			getDiscount(data.results[ 0 ].discounts);
		}
	});
}

var getDiscount = function(discounts) {
	socket.emit('ReadDiscount', {_id: {$in : discounts}});
	socket.on('DiscountRead', function(data) {
		console.log( 'discount:', data );
	})
}

app.controller('FeedItemController', function($scope) {
	var init = function(item) {
		this.item = item;
		getPiggybackOffer(item.piggybackoffer);
	}

	var getTimeLeft = function(until) {
		var timeLeft = (new Date( until )).getTime() - Date.now();

		var hours = Math.floor(timeLeft / (60 * 60 * 1000))
		timeLeft -= hours * 60 * 60 * 1000;

		var minutes = Math.floor(timeLeft / (60 * 1000));
		timeLeft -= minutes * 60 * 1000;

		var seconds = Math.floor(timeLeft / 1000);

		var hoursString = hours ? hours + " Hours, " : "";
		var minutesString = minutes || hours ? minutes + " Minutes, " : "";
		var secondsString = seconds || minutes || hours ? seconds + " Seconds" : "";

		return hoursString + minutesString + secondsString;
	}

	this.interval = setInterval(function() {
		//$scope.$apply();
	}, 1000);

	this.getTimeLeft = getTimeLeft;
	this.init = init;
});