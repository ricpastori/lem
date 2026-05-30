const actionResolvers = [
	{
		name: "function",
		test: (action) => typeof action === "function",
		run: (action) => action(),
	},
	{
		name: "primitive",
		test: (action) =>
			typeof action === "string" ||
			typeof action === "number" ||
			typeof action === "bigint" ||
			typeof action === "boolean",
		run: (action) => action,
	},
];

module.exports = actionResolvers;
