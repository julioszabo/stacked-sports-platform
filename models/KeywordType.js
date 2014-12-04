var mongoose = require('mongoose');

var keywordTypeSchema = new mongoose.Schema({
	name: String,
	color: String
});

module.exports = mongoose.model('KeywordType', keywordTypeSchema);
