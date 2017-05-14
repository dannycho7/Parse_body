/*
 * Application dependencies
 */
const logger = require('morgan');
const parseBody = require('./parseBody');

module.exports = (app) => {

  // app.use(logger('dev'));
  app.use(parseBody.json());
  app.use(parseBody.urlencoded());

  // Post-parser handler
  app.use((req, res) => {
    console.log("Entered catcher");
    console.log("Request Body:", req.body);
    res.end();
  });

}
