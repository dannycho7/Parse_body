module.exports = (data) => {
  let dataArr = data.split('&');
  let returnData = {};
  for(pair in dataArr){
    let splitPair = dataArr[pair].split('=');
    // Decoding is VERY important. Basic level of security and is a must for readability
    returnData[decodeURIComponent(splitPair[0])] = decodeURIComponent(splitPair[1].replace(/\+/g, ' '));
  }
  delete data; // Freeing some memory
  return returnData;
}
