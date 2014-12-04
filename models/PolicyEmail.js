var mongoose = require('mongoose');

var policyEmailSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: { type: String, unique: true, lowercase: true },
	yearInSchool: Number,
	status: String,
	facebook: {
		user: String
	},
	twitter: {
		userName: String,
		profileImageUrl: String,
		displayName: String
	},
	instagram: {
		userName: String,
		userId: String,
		displayName: String,
		profileImageUrl: String,
		isPrivateUser: Boolean
	},
	vine: {
		user: String
	},
	policy: { type : mongoose.Schema.ObjectId, ref : 'Policy' }
});

module.exports = mongoose.model('PolicyEmail', policyEmailSchema);