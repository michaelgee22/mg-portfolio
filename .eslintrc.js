module.exports = {
  extends: [
		"airbnb",
		"plugin:prettier/recommended"
	],
	plugins: [
		"prettier"
	],
	env: {
		"es6": true,
		"browser": true,
		"node": true
	},
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }]
	}
};