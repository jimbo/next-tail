import { useRouter } from "next/router"
import { useCallback } from "react"
import Button from "../Button"
import ProductOptions from "../ProductOptions"
import classes from "./productConfig.module.css"

const ProductConfig = (props) => {
	const { push } = useRouter()

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault()
			push("/checkout")
		},
		[push]
	)

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<ProductOptions />
			<div className={classes.actions}>
				<Button type="submit">Add to Cart</Button>
			</div>
		</form>
	)
}

export default ProductConfig
