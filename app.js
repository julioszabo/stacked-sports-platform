// Module dependencies.
// =============================================================================
var express = require('express'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	MongoStore = require('connect-mongo')(session),
	mongoose = require('mongoose'),
	methodOverride = require('method-override');

// Internal dependencies.
// =============================================================================
var utils = require('./utils.js'),
	secrets = require('./config/secrets'),
	db = require('./db.js'),
	infoConfig = require("./config/info.json"),
	socialIntegracion = require("./social_integration/process.js");

// Create Express server.
// =============================================================================
var app = express();

// Define Rest API Routes
// =============================================================================
var keywords = require('./api_routes/keywords');
	keywordsCategories = require('./api_routes/keywordsCategories'),
	keywordsTypes = require('./api_routes/keywordsTypes'),
	genders = require('./api_routes/genders'),
	groups = require('./api_routes/groups'),
	policies = require('./api_routes/policies'),
	policiesEmails = require('./api_routes/policiesEmails'),
	users = require('./api_routes/users');

// Express configuration.
// =============================================================================
app.set('port', infoConfig.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(db.getSession());


// ROUTES FOR REST API
// =============================================================================
var apiPath = '/' + infoConfig.apiPath;
app.use(apiPath, keywords);
app.use(apiPath, keywordsCategories);
app.use(apiPath, keywordsTypes);
app.use(apiPath, genders);
app.use(apiPath, groups);
app.use(apiPath, policies);
app.use(apiPath, policiesEmails);
app.use(apiPath, users);

// Start Express server.
// =============================================================================
app.listen(app.get('port'), function() {
  console.log('Stacked Sports REST API listening on port %d in %s mode', app.get('port'), app.get('env'));
});

/*********************************************/
/* node scheduler for retriving social data  */
/*********************************************/
setInterval(function(){ 
  console.log('Social Sync Start at:' + utils.getDateTime());
  //socialIntegracion.process();
}, infoConfig.timeProcess);
/*********************************************/

module.exports = app;