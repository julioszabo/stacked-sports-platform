var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
	name: String,
	image: String
});

module.exports = mongoose.model('Group', groupSchema);
