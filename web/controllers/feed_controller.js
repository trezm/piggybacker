var now = new Date();
var sevenDays = (new Date()).setDate( now.getDate() + 7 );
var inFifteenMinutes = (new Date()).setMinutes( now.getMinutes() + 15);

var img = new Image();
var div = document.getElementById('foo');

img.onload = function() {
  div.appendChild(img);
};

img.src = 'http://i.imgur.com/7zSbsIo.png';

var testingItems =  [
    {
	business: {
	    name: "Willy Wong-a's Dinner",
	},
	offer: {
	    description: "15% off poodle pops"
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
