import Footer from "../Footer"
import Header from "../Header"
import classes from "./layout.module.css"

const Layout = (props) => {
	const { children } = props

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
