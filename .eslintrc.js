module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	ignorePatterns: ["test/*"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		sourceType: "module"
	},
	plugins: ["prefer-arrow", "import", "@typescript-eslint"],
	rules: {},
};
