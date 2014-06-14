app.controller( 'FeedItemController', function( $scope ) {
    var init = function( item ) {
	this.item = item;
    }

    var getTimeLeft = function( until ) {
	var timeLeft = until - Date.now();

	var hours = Math.floor( timeLeft / ( 60 * 60 * 1000 ) )
	timeLeft -= hours * 60 * 60 * 1000;
	
	var minutes = Math.floor( timeLeft / ( 60 * 1000 ) );
	timeLeft -= minutes * 60 * 1000;
	
	var seconds = Math.floor( timeLeft / 1000 );
	
	var hoursString = hours ? hours + " Hours, " : "";
	var minutesString = minutes || hours ? minutes + " Minutes, " : "";
	var secondsString = seconds || minutes || hours ? seconds + " Seconds" : "";

	return hoursString + minutesString + secondsString;
    }

    this.interval = setInterval( function() {
	$scope.$apply();
    }, 1000 );

    this.getTimeLeft = getTimeLeft;
    this.init = init;
});
