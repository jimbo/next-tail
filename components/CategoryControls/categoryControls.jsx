import classes from "./categoryControls.module.css"

const CategoryControls = (props) => {
	return (
		<div className={classes.root}>
			<p className={classes.count}>{"38 Results"}</p>
			<div className={classes.control}>{"Show 12"}</div>
			<div className={classes.control}>{"Sort by Latest"}</div>
		</div>
	)
}

export default CategoryControls
