import CategoryControls from "../CategoryControls"
import CategoryTitle from "../CategoryTitle"
import Gallery from "../Gallery"
import classes from "./category.module.css"

const Category = props => {
	return (
		<div className={classes.root}>
			<CategoryTitle>
				{"Tractors"}
			</CategoryTitle>
			<CategoryControls />
			<Gallery />
		</div>
	)
}

export default Category
