const formRoute = require('./form');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('index');
  });

  // Post-parser handler
  app.post("*", (req, res) => {
    console.log("Request Body:", req.body);
    res.render('form');
  });

  app.use('/form', formRoute);
}
