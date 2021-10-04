const venia = require("./theme")
const { getColors } = require("./theme/lib/colors")
const matcher = require("./theme/lib/matcher")

const COLORS = {
	brand: {
		400: "38 128 235"
	},
	neutral: {
		50: "255 255 255",
		75: "250 250 250",
		100: "245 245 245",
		200: "234 234 234",
		300: "225 225 225",
		400: "202 202 202",
		500: "179 179 179",
		600: "142 142 142",
		700: "110 110 110",
		800: "75 75 75",
		900: "44 44 44"
	},
	static: {
		black: "0 0 0",
		white: "255 255 255"
	}
}

const config = {
	mode: "jit",
	presets: [venia],
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
	theme: {
		fontFamily: {
			sans: ["Avenir Next", "ui-sans-serif", "sans-serif"],
			serif: ["Avenir Next", "ui-serif", "serif"]
		},
		venia: (theme) => ({
			plugins: {
				header: {
					backgroundColor: theme("colors.neutral.900"),
					color: theme("colors.neutral.50")
				}
			}
		})
	}
}

module.exports = config
