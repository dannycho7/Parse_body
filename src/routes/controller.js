const formRoute = require('./formRoute');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('index');
  });

  // Post-parser handler
  app.post("*", (req, res) => {
    console.log("Request Body:", req.body);
    res.send('done');
  });

  app.use('/form', formRoute);
}
