import classes from "./gallery.module.css"

const Gallery = (props) => {
	return <div className={classes.root}>{TILES}</div>
}

export default Gallery

const DATA = [
	{ name: "F6030 Water Pump", price: "$55.99" },
	{ name: "Clutch Flywheel", price: "$64.17" },
	{ name: "Hydraulic Gear Pump", price: "$125.99" },
	{ name: "L1141 Crankshaft", price: "$32.79" },
	{ name: "Oil Filter Set", price: "$28.88" },
	{ name: "2 Stroke Carburetor", price: "$59.95" },
	{ name: "4 Stroke Carburetor", price: "$120.99" },
	{ name: "US8918 Water Pump", price: "$90.99" },
	{ name: "1720 Fuel Pump", price: "$32.55" },
	{ name: "BrassTire Valves", price: "$27.18" },
	{ name: "MS101 Fuel Pump", price: "$30.99" },
	{ name: "General Purpose...", price: "$5.25" }
]

const TILES = Array.from(DATA, ({ name, price }) => (
	<div key={name} className={classes.tile}>
		<img
			className={classes.image}
			height={400}
			src="https://picsum.photos/seed/picsum/322/400"
			width={322}
		/>
		<div className={classes.name}>{name}</div>
		<div className={classes.price}>{price}</div>
	</div>
))
