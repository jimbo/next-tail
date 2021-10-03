import classes from "./gallery.module.css"

const Gallery = props => {
	return (
		<div className={classes.root}>
			<div className="tile">
				<div className="image" />
				<div className="name" />
				<div className="price" />
			</div>
		</div>
	)
}

export default Gallery
