import classes from "./megaMenu.module.css"

const MegaMenu = (props) => {
	return <div className={classes.root}>{LINKS}</div>
}

export default MegaMenu

const DATA = ["Equipment", "Supplies", "Parts", "Service", "About Us"]

const LINKS = Array.from(DATA, (name) => (
	<div key={name} className={classes.link}>
		{name}
	</div>
))
