var KeywordCategory = require('../models/KeywordCategory'),
	routes = require('./routes.js').route;
	express = require('express');


module.exports = routes("keywordsCategories", KeywordCategory);