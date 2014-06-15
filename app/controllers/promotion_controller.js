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
		async.parallel([
			function(callback) {
				Condition(condition, function(error, results){
					if (error) {
						
					}
				})
			},
			function(callback) {

			}
		], function(error, results) {
			callback( error, results );
		});
	},

	read: function(callback) {

	},

	update: function(callback) {

	},

	destroy: function(callback) {

	}
}

module.exports.PromotionControllerRoutes = {

}