var Keyword = require('../models/Keyword'),
	express = require('express'),
	routes = require('./routes.js').route;


module.exports = routes("keywords", Keyword, "category type");