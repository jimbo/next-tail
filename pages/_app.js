import Layout from "../components/layout"
import "../styles/globals.css"

const MyApp = (props) => {
	const { Component, pageProps } = props

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
