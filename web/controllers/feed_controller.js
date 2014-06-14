var now = new Date();
var sevenDays = (new Date()).setDate( now.getDate() + 7 );
var inFifteenMinutes = (new Date()).setMinutes( now.getMinutes() + 15);

var testingItems =  [
    {
	business: {
	    name: "Ping Pong's Ding Dong Dinner",
	},
	offer: {
	    description: "15% off won tons"
	},
	piggyback: {
	    expiresAt: sevenDays
	},
	users: [
	]
    },
    {
	business: {
	    name: "Billy Bob's Barbeque",
	},
	offer: {
	    description: "5% off ya order!"
	},
	piggyback: {
	    expiresAt: inFifteenMinutes
	},
	users: [
	]
    }
];

var feedDisplayQuantity = 5;

app.controller( 'FeedController', function( $scope ) {
    this.topFeedItems = testingItems;
    this.feedDisplayQuantity = feedDisplayQuantity;
});
