var mongoose = require('mongoose');

var policySchema = new mongoose.Schema({
		policyText: String,
		policyUrl: String,
		isActive: Boolean,
		createdAt: Date,
		group: { type : mongoose.Schema.ObjectId, ref : 'Group' },
		coach: { type : mongoose.Schema.ObjectId, ref : 'User' },
		gender: { type : mongoose.Schema.ObjectId, ref : 'Gender' },
		keywords: [],
		members: [],
		confirmedMembers: [{ type : mongoose.Schema.ObjectId, ref : 'User' }]
		//keywords: [{ type : mongoose.Schema.ObjectId, ref : 'Keyword' }]
});

module.exports = mongoose.model('Policy', policySchema);
