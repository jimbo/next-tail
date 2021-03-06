const aspectRatioPlugin = require("@tailwindcss/aspect-ratio")
const { getColors } = require("./lib/colors")
const matcher = require("./lib/matcher")
const veniaPlugin = require("./plugins")

const config = {
	corePlugins: {
		divideWidth: false,
		float: false
	},
	plugins: [aspectRatioPlugin, veniaPlugin],
	theme: {
		backgroundColor: (theme) => theme("colors"),
		borderColor: (theme) => theme("colors"),
		colors: getColors(),
		extend: {
			gridTemplateColumns: {
				common: "auto 1fr"
			},
			gridTemplateRows: {
				common: "auto 1fr"
			},
			lineHeight: {
				DEFAULT: "1.5"
			},
			maxHeight: {
				"screen-xs": "480px",
				"screen-sm": "640px",
				"screen-md": "800px",
				"screen-lg": "960px",
				"screen-xl": "1120px",
				"screen-2xl": "1280px",
				"screen-3xl": "1440px"
			},
			maxWidth: {
				"screen-xs": "480px",
				"screen-sm": "640px",
				"screen-md": "800px",
				"screen-lg": "960px",
				"screen-xl": "1120px",
				"screen-2xl": "1280px",
				"screen-3xl": "1440px"
			},
			spacing: {
				full: "100%",
				xs: "1rem",
				sm: "1.5rem",
				md: "2rem",
				lg: "3rem"
			}
		},
		fontFamily: {
			sans: ["Muli", "ui-sans-serif", "sans-serif"],
			serif: ["Source Serif Pro", "ui-serif", "serif"]
		},
		fontSize: {
			50: "0.6875rem",
			75: "0.75rem",
			100: "0.875rem",
			200: "1rem",
			300: "1.125rem",
			400: "1.25rem",
			500: "1.375rem",
			600: "1.5rem",
			700: "1.75rem",
			800: "2rem",
			900: "2.25rem",
			1000: "2.5rem",
			1100: "3rem",
			1200: "3.5rem",
			DEFAULT: "0.875rem"
		},
		minHeight: (theme) => theme("spacing"),
		minWidth: (theme) => theme("spacing"),
		screens: {
			"xs": "480px",
			"sm": "640px",
			"md": "800px",
			"lg": "960px",
			"xl": "1120px",
			"2xl": "1280px",
			"3xl": "1440px"
		},
		transitionDuration: {
			"xs": "64ms",
			"sm": "128ms",
			"md": "192ms",
			"lg": "256ms",
			"xl": "320ms",
			"2xl": "384ms",
			"3xl": "448ms",
			"4xl": "512ms",
			"DEFAULT": "384ms",
			"enter": "224ms",
			"exit": "192ms"
		},
		venia: (theme) => ({
			plugins: {
				body: {
					color: theme("colors.neutral.800")
				}
			}
		})
	}
}

module.exports = config
