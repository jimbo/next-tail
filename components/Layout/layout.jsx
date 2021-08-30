import { useRouter } from "next/router"
import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"
import Header from "../Header"
import classes from "./layout.module.css"

const Layout = (props) => {
	const { children } = props
	const { pathname } = useRouter()

	const isHome = pathname === "/"
	const shouldRenderBreadcrumbs = !isHome
	console.log({ pathname, isHome, shouldRenderBreadcrumbs })
	const breadcrumbs = shouldRenderBreadcrumbs ? <Breadcrumbs /> : null

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>
				{breadcrumbs}
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout
