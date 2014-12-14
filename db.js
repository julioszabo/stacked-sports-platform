var session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	mongoose = require('mongoose'),
	secrets = require('./config/secrets');


mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
		console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

module.exports = {
	getSession: function(){
		return session({
  					resave: true,
  					saveUninitialized: true,
  					secret: secrets.sessionSecret,
  					store: new MongoStore({ url: secrets.db, auto_reconnect: true })
				});
	}
};