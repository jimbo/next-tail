import classes from "./filterOptions.module.css"

const FilterOptions = (props) => {
	return (
		<div className={classes.root}>
			<h3 className={classes.heading}>{"Attribute"}</h3>
			<div className={classes.options}>{OPTIONS}</div>
			<div className={classes.prompt}>Show More</div>
		</div>
	)
}

export default FilterOptions

const OPTIONS = Array.from({ length: 4 }, (_, i) => (
	<div key={`${i}`} className={classes.option}>
		<div className={classes.input} />
		<div className={classes.label}>{"Option"}</div>
	</div>
))
