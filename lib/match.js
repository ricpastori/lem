const run = require("./actions/run");
const matchPattern = require("./patterns/match-pattern");
const { wildcard } = require("./cases");

function match(value, cases) {
	const matchedCase = cases.find((c) => matchPattern(c.pattern, value));
	if (matchedCase) return run(matchedCase.action);

	const otherwiseCase = cases.find((c) => c.pattern === wildcard);
	if (otherwiseCase) return run(otherwiseCase.action);

	throw new Error("No matching case found and no default case provided");
}

module.exports = match;
