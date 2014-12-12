var	db = require('../../db.js'),
 	  PolicyEmail = require('../../models/PolicyEmail'),
 	  InstagramPost = require('../../models/InstagramPost'),
 	  ig_api = require('../api_wrappers/instagram.js').api_result();


 
PolicyEmail.find({}).exec(function(err, result) {
  if (!err) {

    // get all instagram account and iterate throght them to sync data
    var i = 0;
    while (result[i]) {

      // test if api wrapper works
      console.log(ig_api.user_media_recent('427553890'));

      // call the model to store ig post
      //InstagramPost.addPost(post);

    	i++;
    }
  } else {
    console.log(err);
  };
});
