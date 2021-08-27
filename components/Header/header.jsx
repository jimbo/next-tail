import { useEffect, useState } from "react"
import classes from "./header.module.css"

const Header = (props) => {
	const [hydrated, setHydrated] = useState(false)
	const text = hydrated ? "Hydrated!" : "Hydrating..."

	useEffect(() => {
		console.log(classes)
		setHydrated(true)
	}, [setHydrated])

	return (
		<header className={classes.root}>
			<div className={classes.header}>
				<div className={classes.switcher} />
			</div>
			<div className={classes.body}>
				<nav className={classes.nav}>{text}</nav>
			</div>
		</header>
	)
}

export default Header
