/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const { createNode } = actions

	// fetch raw data from the randomuser api
	const fetchProducts = () =>
		axios.get(
			`https://cdn.shopify.com/s/files/1/0333/4474/9700/files/product.json`
		)
	// await for results
	const res = await fetchProducts()
	// console.log(res.data)

	const nodeContent = JSON.stringify(res.data)

	const nodeMeta = {
		id: createNodeId(`my-data-${res.data.id}`),
		parent: null,
		children: [],
		internal: {
			type: `Product`,
			mediaType: `text/html`,
			content: nodeContent,
			contentDigest: createContentDigest(res.data),
		},
	}
	const node = Object.assign({}, res.data, nodeMeta)
	createNode(node)

	return
}
