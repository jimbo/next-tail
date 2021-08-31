const config = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/athena-tank-dress",
					destination: "/product"
				}
			]
		}
	}
}

module.exports = config
