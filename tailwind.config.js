const venia = require("./theme")

const config = {
	mode: "jit",
	presets: [venia],
	purge: {
		content: ["./components/**/*.css", "./pages/**/*.css"],
		extractors: [
			{
				extractor: (content) => content.match(matcher) || [],
				extensions: ["css"]
			}
		]
	},
	separator: "_"
}

module.exports = config
