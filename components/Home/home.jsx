import Head from "next/head"
import Link from "next/link"
import { useMemo } from "react"
import classes from "./home.module.css"

const Home = (props) => {
	const sliderImageProps = useMemo(
		() =>
			getResponsiveImageProps(
				7 / 16,
				{ min: 800, width: 1440 },
				{ width: 640 }
			),
		[]
	)

	return (
		<main className={classes.root}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={classes.hero}>
				<img className={classes.slider} {...sliderImageProps} />
			</div>
			<div className={classes.tiles}>
				<Link className={classes.tile} href="/product">
					<img
						className={classes.tileImage}
						height="280"
						src="https://picsum.photos/id/112/752/280"
					/>
				</Link>
				<Link className={classes.tile} href="/product">
					<img
						className={classes.tileImage}
						height="280"
						src="https://picsum.photos/id/127/752/280"
					/>
				</Link>
				<Link className={classes.tile} href="/product">
					<img
						className={classes.tileImage}
						height="280"
						src="https://picsum.photos/id/1016/752/280"
					/>
				</Link>
			</div>
		</main>
	)
}

export default Home

const getResponsiveImageProps = (heightFactor, ...widths) => {
	const sizes = []
	const srcSet = []

	for (const { min, width } of widths) {
		const query = min ? `(min-width: ${min}px) ` : ""
		const sizeEntry = `${query}${width}px`

		const height = width * heightFactor
		const src = `https://picsum.photos/id/1015/${width}/${height}`
		const srcEntry = `${src} ${width}w`

		sizes.push(sizeEntry)
		srcSet.push(srcEntry)
	}

	return {
		sizes: sizes.join(", "),
		srcSet: srcSet.join(", ")
	}
}
