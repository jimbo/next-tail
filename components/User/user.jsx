import classes from "./user.module.css"

const User = (props) => {
	return <div className={classes.root}>{LINKS}</div>
}

export default User

const DATA = ["Search", "Sign In", "Cart"]

const LINKS = Array.from(DATA, (name) => (
	<div key={name} className={classes.link}>
		{name}
	</div>
))
