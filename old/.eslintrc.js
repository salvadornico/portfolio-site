// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2017,
		sourceType: "module",
	},
	env: {
		browser: true,
		"cypress/globals": true,
	},
	extends: [
		"eslint:recommended",
		"prettier",
		"prettier/standard",
		"plugin:vue/recommended",
	],
	plugins: ["vue", "prettier", "cypress"],
	rules: {
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"arrow-parens": "off",
		"generator-star-spacing": "off",
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		"linebreak-style": ["warn", "unix"],
		"no-undef": "off",
		"no-console": "off",
		"prettier/prettier": "warn",
		"vue/require-default-prop": "off",
	},
}
