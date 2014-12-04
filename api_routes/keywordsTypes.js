var KeywordType = require('../models/KeywordType'),
	routes = require('./routes.js').route;
	express = require('express');


module.exports = routes("keywordsTypes", KeywordType);