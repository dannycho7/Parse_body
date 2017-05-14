module.exports = (data) => {
  let dataArr = data.split('&');
  let returnData = {};
  for(pair in dataArr){
    let splitPair = dataArr[pair].split('=');
    // Decoding is very important. Basic level of security
    returnData[decodeURIComponent(splitPair[0])] = decodeURIComponent(splitPair[1]);
  }
  delete data; // Freeing some memory
  return returnData;
}
