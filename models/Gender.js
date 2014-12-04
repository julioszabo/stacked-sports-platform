var mongoose = require('mongoose');

var genderSchema = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Gender', genderSchema);
