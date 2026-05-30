const actionResolvers = require("./resolvers");

function run(action) {
	if (action === null || action === undefined) {
		throw new Error("Action cannot be null or undefined");
	}

	const resolver = actionResolvers.find((resolver) => resolver.test(action));

	if (!resolver) {
		throw new Error("Unsupported action type");
	}

	return resolver.run(action);
}

module.exports = run;
