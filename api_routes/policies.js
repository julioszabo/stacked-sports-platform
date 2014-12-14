var Policy = require('../models/Policy'),
  routes = require('./routes.js').route;
  express = require('express');


module.exports = routes("policies", Policy, "group coach gender members keywords");
