const { wildcard } = require("../cases");

function matchPattern(pattern, value) {
	return pattern !== wildcard && pattern === value;
}

module.exports = matchPattern;
