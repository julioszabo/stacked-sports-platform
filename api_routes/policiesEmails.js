var PolicyEmail = require('../models/PolicyEmail'),
	routes = require('./routes.js').route;
	express = require('express');


module.exports = routes("policiesemails", PolicyEmail, "policy");