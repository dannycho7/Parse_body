const express = require('express');
const app = express();

require('../app')(app);

app.listen(5000, (err) => {
  console.log("Listening in on port 5000")
});
