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

	it('should actually create a promotion', function(done) {
		PromotionController.create({
			created_date: Date.soon()
		}, {}, function(error, results) {
			expect(results).to.exist;
			done();
		})
	});

	it('should create a new condition when a promotion is created', function(done) {
		Condition.find({}, function(error, results) {
			var len = results.length;

			PromotionController.create({}, {}, function(error, results) {
				Condition.find({}, function(error, results) {
					expect(results.length).to.equal(len + 1);
					done();
				})
			});
		})
	});

	it('should have a read method', function() {
		expect(PromotionController).to.respondTo('read');
	});

	it('should return the correct promotion', function(done) {
		PromotionController.create({}, {}, function(error, results) {
			var id = results._id;
			PromotionController.read({
				_id: id
			}, function(error, results) {
				expect(results).to.exist;
				done();
			})
		});
	});

	it('should have an update method', function() {
		expect(PromotionController).to.respondTo('update');
	});

	it('should update the promotion properly', function(done) {
		var now = new Date();
		var inAWeek = (new Date()).setDate(now.getDate() + 7);
		PromotionController.create({}, {}, function(error, results) {
			var id = results._id;
			PromotionController.update({
				_id: id
			}, {
				$set: {
					end_date: inAWeek
				}
			}, function(error, results) {
				PromotionController.read({
					_id: id
				}, function(error, results) {
					expect(results.length).to.equal(1);
					expect(results[0].end_date.getTime()).to.equal(inAWeek);
					done();
				})
			})
		})
	});

	it('should have a destroy method', function() {
		expect(PromotionController).to.respondTo('destroy');
	});

	it('should actually destroy the promotion', function(done) {
		PromotionController.create({}, {}, function(error, results) {
			var id = results._id;
			PromotionController.destroy({
				_id: id
			}, function(error, results) {
				PromotionController.read({
					_id: id
				}, function(error, results) {
					expect(results.length).to.equal( 0 );
					done();
				})
			})
		})
	});

	it('should have a getCondition method', function() {
		expect(PromotionController).to.respondTo('getCondition');
	});

	it('should return the correct condition for getCondition', function(done) {
		PromotionController.create({}, {}, function(error, results) {
			var conditionId = results.condition;
			PromotionController.getCondition({_id: results._id}, function(error, results) {
				expect(results).to.exist;
				expect(results._id.toString()).to.equal(conditionId.toString());
				done();
			})
		});
	});
})