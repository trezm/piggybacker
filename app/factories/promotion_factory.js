var async = require('async');
var settings = require('../../settings.js');
var mongoose = require('mongoose');

mongoose.connect(settings.MONGO_URL);

var Promotion = require('../models/promotion/promotion.js');
var Condition = require('../models/promotion/condition/condition.js');
var HoponOffer = require('../models/promotion/offer/hoponoffer.js');
var PiggybackOffer = require('../models/promotion/offer/piggybackoffer.js');
var Discount = require('../models/promotion/discount/discount.js');
var Item = require('../models/promotion/discount/item/item.js');

async.parallel({
		promotion: function(done) {
			Promotion.create({}, done);
		},
		condition: function(done) {
			Condition.create({}, done);
		},
		hoponOffer: function(done) {
			HoponOffer.create({}, done);
		},
		piggybackOffer: function(done) {
			PiggybackOffer.create({}, done);
		},
		discount: function(done) {
			Discount.create({}, done);
		},
		item: function(done) {
			Item.create({}, done);
		}
	},
	function(error, results) {
		var promotion = results.promotion;
		var condition = results.condition;
		var hoponOffer = results.hoponOffer;
		var piggybackOffer = results.piggybackOffer;
		var discount = results.discount;
		var item = results.item;

		promotion.condition = condition;
		promotion.hoponoffer = hoponOffer;
		promotion.piggybackoffer = piggybackOffer;
		hoponOffer.discounts = [discount];
		piggybackOffer.discounts = [discount];
		discount.qualifying_items = [item];

		async.parallel([

			function(done) {
				promotion.save(done);
			},
			function(done) {
				condition.save(done);
			},
			function(done) {
				hoponOffer.save(done);
			},
			function(done) {
				piggybackOffer.save(done);
			},
			function(done) {
				discount.save(done);
			},
			function(done) {
				item.save(done);
			}
		], function(error, results) {
			console.log(results);
		})
	});