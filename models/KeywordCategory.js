var mongoose = require('mongoose');

var keywordCategorySchema = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('KeywordCategory', keywordCategorySchema);
