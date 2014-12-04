var mongoose = require('mongoose');

var instagramPostSchema = new mongoose.Schema({
	mediaContentType: String,
	mediaContentImageUrl: String,
	mediaContentVideoUrl: String,
	mediaContentVideoImgUrl: String,
	mediaContentVideoHeight: String,
	mediaContentVideoWidth: String,
	instagramUserId: String,
	displayUserName: String,
	postDateTime: Date,
	postId: String,
	postTextContent: String,
	deleteDate:  { type: Date, default: null }
});

module.exports = mongoose.model('InstagramPost', instagramPostSchema);
