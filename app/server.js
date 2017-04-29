const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conversionMethods = require('./methods');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


/*
 * My Interpretation of bodyParser.json()
 */
app.post('/', (req, res, next) => {
  if(req.headers['content-type'] == 'application/json'){
    console.log("Entered the json parser");
    let data = "";
    req.on("data", (chunk) => {
      console.log(chunk);
      data += chunk;
    });
    req.on("end", () => {
      req.body = conversionMethods.json(data);
      next();
    });
  } else {
    next();
  }
});

/*
 * My Interpretation of bodyParser.urlencoded()
 */
app.post('/', (req, res, next) => {
  if(req.headers['content-type'] == 'application/x-www-form-urlencoded'){
    console.log("Entered the urlencoded handler");
    let data = "";
    req.on("data", (chunk) => {
      console.log(chunk);
      data += chunk;
    });
    req.on("end", () => {
      req.body = conversionMethods.keyVal(data);
      next();
    });
  } else {
    next();
  }
});

app.use((req, res) => {
  console.log("Entered catcher");
  console.log("Request Body:", req.body);
  res.end();
});

app.listen(5000, () => console.log("Listening in on port 5000"));
