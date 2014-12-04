var Group = require('../models/Group'),
	routes = require('./routes.js').route;
	express = require('express');


module.exports = routes("groups", Group);