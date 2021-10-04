import { useEffect, useState } from "react"
import MegaMenu from "../MegaMenu"
import User from "../User"
import classes from "./header.module.css"

const Header = (props) => {
	const [hydrated, setHydrated] = useState(false)
	const text = hydrated ? "Hydrated!" : "Hydrating..."

	useEffect(() => {
		setHydrated(true)
	}, [setHydrated])

	return (
		<header className={classes.root}>
			<div className={classes.header}>
				<div className={classes.switcher} />
			</div>
			<div className={classes.body}>
				<nav className={classes.nav}>
					<div className={classes.menu} />
					<img className={classes.logo} src="/venia-logo.svg" />
					<MegaMenu />
					<User />
				</nav>
			</div>
		</header>
	)
}

export default Header
