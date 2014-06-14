var settings = require('../settings.js');
var settings = require('../settings.js');
var mongoose = require('mongoose');
var expect = require("chai").expect;
//var Business = require('../app/models/business.js');
var BusinessController = require('../app/controllers/business_controller.js').BusinessController;

Date.soon = function() {
	return new Date(Date.now() + 24 * 60 * 60 * 1000);
}

describe("BusinessController", function() {
	var business;

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
		expect(BusinessController).to.respondTo('create');
	});

	it('should have a read method', function() {
		expect(BusinessController).to.respondTo('read');
	});

	it('should have an update method', function() {
		expect(BusinessController).to.respondTo('update');
	});

	it('should have a destroy method', function() {
		expect(BusinessController).to.respondTo('destroy');
	})
})