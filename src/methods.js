module.exports.keyVal = (data) => {
  let dataArr = data.split('&');
  let returnData = {};
  for(pair in dataArr){
    let splitPair = dataArr[pair].split('=');
    returnData[splitPair[0]] = splitPair[1];
  }
  console.log(returnData);
  return returnData;
}

module.exports.json = (data) => {
  return JSON.parse(data);
}
