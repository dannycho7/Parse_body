/*
 * Application dependencies
 */
const logger = require('morgan');
const parseBody = require('./parseBody');
const path = require('path');
const express = require('express');

module.exports = (app) => {

  // Middleware
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  app.use(logger('dev'));
  app.use(parseBody.json());
  app.use(parseBody.urlencoded());

  // Initialize routes
  require('./routes/controller')(app);
}
