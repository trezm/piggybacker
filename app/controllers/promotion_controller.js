var async = require('async');

var settings = require('../../settings');
var Promotion = require('../models/promotion/promotion.js');
var Condition = require('../models/promotion/condition/condition.js');

// Promotion Schema
// var Schema = schema({
//     condition : {type : schema.ObjectId, ref : 'Condition'},
//     piggybackoffer : {type : schema.ObjectId, ref : 'Piggybackoffer'},
//     hoponoffer : {type : schema.ObjectId, ref : 'Hoponoffer'},
//     created_date: { type: Date, default: Date.now },
//     end_date: { type: Date, default: Date.now },
//     updated_date: { type: Date, default: Date.now },
//     active: Boolean,
// });

module.exports.PromotionController = {
	create: function(endDate, condition, callback) {
		async.parallel({
			condition: function(callback) {
				Condition.create(condition, function(error, results){
					if (error) {
						callback(error);
						return;
					}
					callback(null, results);
				});
			},
			promotion: function(callback) {
				Promotion.create({end_date: endDate}, function(error, results){
					if (error){
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

	update: function(params, updateQuery, callback) {
		Promotion.update(params, updateQuery, callback);
	},

	destroy: function(params, callback) {
		Promotion.remove(params, callback)
	},

	getCondition: function(params, callback) {
		this.read(params, function(error, results) {
			if ( error ) {
				callback( error );
				return;
			}

			Condition.findOne( results[ 0 ].condition, callback );
		})
	}
}

module.exports.PromotionControllerRoutes = {

}