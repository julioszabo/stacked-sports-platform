var ig_api = require('instagram-node').instagram();
	secrets = require('../../config/secrets');


exports.api_result = function() {

  // authentication
  ig_api.use({ access_token: secrets.instagram.AccessToken });
  ig_api.use({ client_id: secrets.instagram.clientID, client_secret: secrets.instagram.clientSecret });

  return {
    user_media_recent: function(user_id) {
		ig_api.user_media_recent(user_id, function(err, medias, pagination, remaining, limit) {
	        if(err){
	        	return err;
	        } else {
	        	return medias;
	        }
		});
    },
    user_search: function(user_name) {
      ig_api.user_search(user_name, function(err, users, limit) {
        if(err){
        	return err;
        } else {
        	return users;
        }
      });
    },
    user_by_id: function(user_id) {
      ig_api.user(user_id, function(err, user) {
        if(err){
        	return err;
        } else {
        	return user;
        }
      });
    }
  };
};
