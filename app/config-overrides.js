const { alias } = require("react-app-rewire-alias")

module.exports = function override(config) {
	alias({
		"@components": "src/components",
		"@view": "src/view",
		"@assets": "src/assets",
		"@css": "src/css"
	})(config)

	return config
}