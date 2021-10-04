import CategoryControls from "../CategoryControls"
import CategoryTitle from "../CategoryTitle"
import Gallery from "../Gallery"
import classes from "./category.module.css"

const Category = (props) => {
	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<CategoryTitle>{"Tractors"}</CategoryTitle>
			</header>
			<aside className={classes.aside}></aside>
			<section className={classes.content}>
				<CategoryControls />
				<Gallery />
			</section>
		</div>
	)
}

export default Category
