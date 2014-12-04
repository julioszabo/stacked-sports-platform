var Gender = require('../models/Gender'),
	routes = require('./routes.js').route;
	express = require('express');


module.exports = routes("genders", Gender);