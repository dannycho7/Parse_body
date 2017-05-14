const keyVal = require('../lib/keyVal');

module.exports = (req, res, next) => {
  /*
   * My Interpretation of bodyParser.urlencoded({ extended: false })
   */
  if(req.method == "POST") {
    if(req._body){
      // _body used as a flag to check if body has already been set by previous middleware; solves problem of double include
      return next();
    }
    if(req.headers['content-type'] == 'application/x-www-form-urlencoded'){
      // content type must be x-www-form-urlencoded
      console.log("Entered the urlencoded handler");
      let data = "";
      req.on("data", (chunk) => {
        console.log("Chunk:", chunk);
        data += chunk;
      });
      req.on("end", () => {
        req.body = keyVal(data);
        req._body = true;
        return next();
      });
    } else {
      return next();
    }
  } else {
    // method must be a POST method
    return next();
  }
}
