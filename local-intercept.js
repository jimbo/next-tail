function localIntercept(targets) {
	const { Targetables } = require("@magento/pwa-buildpack")
	const targetables = Targetables.using(targets)

    // grab the header's CSS file
	const HeaderStyles = targetables.cssModule(
		"@magento/venia-ui/lib/Header/header.module.css"
	)

    // replace classnames within a selector
	HeaderStyles.replace(
		".root",
		"border-b-2",
		"border-b-1"
	)
}

module.exports = localIntercept
