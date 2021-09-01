const config = {
	rewrites: fetchRewrites
}

module.exports = config

/**
 * Maybe fetch URL rewrites from some endpoint at build time?
 */
async function fetchRewrites() {
	return delay(rewrites)
}

async function delay(response, timeout = 4000) {
	console.log("⭕ Fetching with delay...")
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("✅ Resolved after delay!")
			resolve(response)
		}, timeout)
	})
}

// hardcoded here
const rewrites = [
	{
		source: "/athena-tank-dress",
		destination: "/product"
	}
]
