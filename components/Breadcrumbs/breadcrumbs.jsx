import Link from "next/link"
import classes from "./breadcrumbs.module.css"

const Breadcrumbs = (props) => {
	return (
		<nav className={classes.breadcrumbs}>
			<Link className={classes.link} href="/">
				Home
			</Link>
			<span className={classes.separator}>/</span>
			<span className={classes.link}>Dresses</span>
			<span className={classes.separator}>/</span>
			<span className={classes.title}>Athena Tank Dress</span>
		</nav>
	)
}

export default Breadcrumbs
