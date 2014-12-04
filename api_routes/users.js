var User = require('../models/User'),
	routes = require('./routes.js').route;
	express = require('express');


module.exports = routes("users", User);