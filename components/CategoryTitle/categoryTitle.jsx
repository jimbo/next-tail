import classes from "./categoryTitle.module.css"

const CategoryTitle = props => {
	const { children } = props

	return (
		<h1 className={classes.root}>
			{children}
		</h1>
	)
}

export default CategoryTitle
