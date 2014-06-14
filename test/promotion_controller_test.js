var settings = require('../settings.js');
var mongoose = require('mongoose');
var expect = require("chai").expect;
//var Promotion = require('../app/models/promotion.js');
var PromotionController = require('../app/controllers/promotion_controller.js').PromotionController;

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