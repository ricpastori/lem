const wildcard = Symbol("wildcards");

function on(pattern, action) {
	const matchingCase = {
		pattern: pattern,
		action: action,
	};
	return matchingCase;
}

function otherwise(action) {
	const matchingCase = {
		pattern: wildcard,
		action: action,
	};
	return matchingCase;
}

module.exports = {
	on,
	otherwise,
	wildcard,
};
