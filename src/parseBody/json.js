const parseJSON = require('../lib/parseJSON');

module.exports = (req, res, next) => {
  /*
   * My Interpretation of bodyParser.json()
   */
  if(req.method == "POST") {
    if(req._body){
      // _body used as a flag to check if body has already been set by previous middleware; solves problem of double include
      return next();
    }
    if(req.headers['content-type'] == 'application/json'){
      // content type must be json
      console.log("Entered the json parser");
      let data = "";
      req.on("data", (chunk) => {
        console.log("Chunk:",chunk);
        data += chunk;
      });
      req.on("end", () => {
        req.body = parseJSON(data);
        req._body = true;
        return next();
      });
    } else {
      return next();
    }
  } else {
    // method must be a POST
    return next();
  }
}
