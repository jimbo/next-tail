const matcher = require("./matcher")

module.exports = {
    mode: "jit",
	purge: {
		content: ["./components/**/*.css", "./pages/**/*.css"],
		extractors: [
			{
				extensions: ["css"],
				extractor: (content) => content.match(matcher) || []
			}
		]
	},
	separator: "_",
}
