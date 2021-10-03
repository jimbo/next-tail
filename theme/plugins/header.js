const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		".header": {
			backgroundColor: theme("venia.plugins.header.backgroundColor"),
			color: theme("venia.plugins.header.color"),
			height: theme("venia.plugins.header.height"),
			width: theme("width.full")
		}
	})
}

const ID = "card"
module.exports = [ID, addRulesets]
