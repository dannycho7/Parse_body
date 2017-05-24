// Add each parser middleware here

module.exports.json = () => {
	return require('./json');
}

module.exports.urlencoded = () => {
	return require('./urlencoded');
}