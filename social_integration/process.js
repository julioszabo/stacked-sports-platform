module.exports = {
	process: function(){
		 var child_process = require('child_process');

		 // create a child process for each social integration
		 var instagram_process = child_process.fork("social_integration/db_updaters/instagram.js");
		 //var twitter_process = child_process.fork("twitter.js", [i]);

	}
};