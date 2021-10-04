import FilterOptions from "../FilterOptions"
import classes from "./filterForm.module.css"

const FilterForm = (props) => {
	return (
		<div className={classes.root}>
			<h2 className={classes.heading}>{"Filters"}</h2>
			<div className={classes.form}>
				<FilterOptions />
				<FilterOptions />
				<FilterOptions />
			</div>
		</div>
	)
}

export default FilterForm
