import CategoryControls from "../CategoryControls"
import CategoryTitle from "../CategoryTitle"
import FilterForm from "../FilterForm"
import Gallery from "../Gallery"
import classes from "./category.module.css"

const Category = (props) => {
	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<CategoryTitle>{"Tractor Parts"}</CategoryTitle>
			</header>
			<aside className={classes.aside}>
				<FilterForm />
			</aside>
			<section className={classes.content}>
				<CategoryControls />
				<Gallery />
			</section>
		</div>
	)
}

export default Category
