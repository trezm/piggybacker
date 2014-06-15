var async = require('async');

var settings = require('../../settings');
var Promotion = require('../models/promotion/promotion.js');
var Condition = require('../models/promotion/condition/condition.js');
var HoponOffer = require('../models/promotion/offer/hoponoffer.js');
var PiggybackOffer = require('../models/promotion/offer/piggybackoffer.js');
var Discount = require('../models/promotion/discount/discount.js');
var Item = require('../models/promotion/discount/item/item.js');

module.exports.PromotionController = {
	create: function(endDate, condition, callback) {
		async.parallel({
			condition: function(callback) {
				Condition.create(condition, function(error, results) {
					if (error) {
						callback(error);
						return;
					}
					callback(null, results);
				});
			},
			promotion: function(callback) {
				Promotion.create({
					end_date: endDate
				}, function(error, results) {
					if (error) {
						callback(error);
						return;
					}
					callback(null, results);
				});
			}
		}, function(error, results) {
			var promotion = results.promotion;
			promotion.condition = results.condition;
			promotion.save(callback);
		});
	},

	read: function(params, callback) {
		Promotion.find(params, callback);
	},

	readPiggybackOffer: function(params, callback) {
		PiggybackOffer.find(params, callback);
	},

	readHoponOffer: function(params, callback) {
		HoponOffer.find(params, callback);
	},

	readDiscount: function(params, callback) {
		Discount.find(params, callback);
	},

	readItem: function(params, callback) {
		Item.find(params, callback);
	},

	update: function(params, updateQuery, callback) {
		Promotion.update(params, updateQuery, callback);
	},

	destroy: function(params, callback) {
		Promotion.remove(params, callback)
	},

	getCondition: function(params, callback) {	
		this.read(params, function(error, results) {
			if (error) {
				callback(error);
				return;
			}

			Condition.findOne(results[0].condition, callback);
		})
	}
}

module.exports.PromotionControllerRoutes = {

}

module.exports.PromotionControllerSocket = function(socket) {
	socket.on('CreatePromotion', function(data) {
		module.exports.PromotionController.create(data.endDate, data.condition, function(error, results) {
			socket.emit('PromotionCreated', {
				error: error,
				results: results
			});
		});
	});

	socket.on('ReadPromotion', function(data) {
		module.exports.PromotionController.read(data, function(error, results) {
			socket.emit('PromotionRead', {
				error: error,
				results: results
			});
		});
	});

	socket.on('ReadPiggybackOffer', function(data) {
		module.exports.PromotionController.readPiggybackOffer(data, function(error, results) {
			socket.emit('PiggybackOfferRead', {
				error: error,
				results: results
			});
		});		
	});

	socket.on('ReadHoponOffer', function(data) {
		module.exports.PromotionController.readHoponOffer(data, function(error, results) {
			socket.emit('HoponOfferRead', {
				error: error,
				results: results
			});
		});		
	});

	socket.on('ReadDiscount', function(data) {
		module.exports.PromotionController.readDiscount(data, function(error, results) {
			socket.emit('DiscountRead', {
				error: error,
				results: results
			});
		});		
	});

	socket.on('ReadItem', function(data) {
		module.exports.PromotionController.readItem(data, function(error, results) {
			socket.emit('ItemRead', {
				error: error,
				results: results
			});
		});		
	});
}