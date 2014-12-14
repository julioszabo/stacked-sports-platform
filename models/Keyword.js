var mongoose = require('mongoose');

var keywordSchema = new mongoose.Schema({
    name: String,
    category:  { type : mongoose.Schema.ObjectId, ref : 'KeywordCategory' },
    type: { type : mongoose.Schema.ObjectId, ref : 'KeywordType' }
});

module.exports = mongoose.model('Keyword', keywordSchema);
