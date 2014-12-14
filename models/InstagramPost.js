var mongoose = require('mongoose'),
	infoConfig = require("../config/info.json");

var instagramPostSchema = new mongoose.Schema({
	mediaContentType: String,
	mediaContentImageUrl: String,
	mediaContentImageWidth: String,
	mediaContentImageHeight: String,
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


// Create a new instagram post directly from IG API and save it to db
// =============================================================================
instagramPostSchema.statics.addPost = function (post, callback) {
	if(post){

		// create the ig post with all properties from api obj
		var ig_item = new this();
		ig_item.mediaContentType = post[infoConfig.instagram.media_recent.mediaContentType];
		ig_item.mediaContentImageUrl = post[infoConfig.instagram.media_recent.mediaContentImageUrl];
		ig_item.mediaContentImageWidth = post[infoConfig.instagram.media_recent.mediaContentImageWidth];
		ig_item.mediaContentImageHeight = post[infoConfig.instagram.media_recent.mediaContentImageHeight];
		ig_item.mediaContentVideoUrl = post[infoConfig.instagram.media_recent.mediaContentVideoUrl];
		ig_item.mediaContentVideoImgUrl = post[infoConfig.instagram.media_recent.mediaContentVideoImgUrl];
		ig_item.mediaContentVideoHeight = post[infoConfig.instagram.media_recent.mediaContentVideoHeight];
		ig_item.mediaContentVideoWidth = post[infoConfig.instagram.media_recent.mediaContentVideoWidth];
		ig_item.instagramUserId = post[infoConfig.instagram.media_recent.instagramUserId];
		ig_item.displayUserName = post[infoConfig.instagram.media_recent.displayUserName];
		ig_item.postDateTime = post[infoConfig.instagram.media_recent.postDateTime];
		ig_item.postId = post[infoConfig.instagram.media_recent.postId];
		ig_item.postTextContent = post[infoConfig.instagram.media_recent.postTextContent];
		ig_item.deleteDate = null;

		// save the item to db
		ig_item.save(callback);
	}
};


module.exports = mongoose.model('InstagramPost', instagramPostSchema);
