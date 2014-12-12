var mongoose = require('mongoose');

var policySchema = new mongoose.Schema({
	policyText: String,
	policyUrl: String,
	isActive: Boolean,
	createdAt: Date,
	group: { type : mongoose.Schema.ObjectId, ref : 'Group' },
	admin: { type : mongoose.Schema.ObjectId, ref : 'User' },
	gender: { type : mongoose.Schema.ObjectId, ref : 'Gender' }
});

module.exports = mongoose.model('Policy', policySchema);
