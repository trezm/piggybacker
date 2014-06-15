var settings = require('../settings.js');
var mongoose = require('mongoose');
var expect = require("chai").expect;
//var Promotion = require('../app/models/promotion.js');
var PromotionController = require('../app/controllers/promotion_controller.js').PromotionController;
var Condition = require('../app/models/promotion/condition/condition.js')

Date.soon = function() {
	return new Date(Date.now() + 24 * 60 * 60 * 1000);
}

describe("PromotionController", function() {
	var promotion;

	before(function() {
		mongoose.connect(settings.MONGO_URL);
	});

	beforeEach(function(done) {
		// Sanitize the database
		for (var i in mongoose.connection.collections) {
			mongoose.connection.collections[i].remove(function() {});
		}

		done();
	});

	after(function(done) {
		mongoose.connection.close(function() {
			done();
		});
	});

	it('should have a create method', function() {
		expect(PromotionController).to.respondTo('create');
	});

	// it('should actually create a promotion', function(done) {
	// 	PromotionController.create({
	// 		created_date: Date.soon()
	// 	}, {}, function(error, results) {
	// 		expect(results).to.not.be.null;
	// 		done();
	// 	})
	// });

	// it('should create a new condition when a promotion is created', function(done) {
	// 	Condition.find({}, function(error, results) {
	// 		var len = results.length;

	// 		PromotionController.create({}, {}, function(error, results) {
	// 			Condition.find({}, function(error, results) {
	// 				expect(results.length).to.equal(len + 1);
	// 				done();
	// 			})
	// 		});
	// 	})
	// });

	it('should have a read method', function() {
		expect(PromotionController).to.respondTo('read');
	});

	it('should have an update method', function() {
		expect(PromotionController).to.respondTo('update');
	});

	it('should have a destroy method', function() {
		expect(PromotionController).to.respondTo('destroy');
	});
})