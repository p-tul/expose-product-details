import * as React from 'react'
// import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Timer from '../components/Timer'
import Product from '../components/Product'
import Footer from '../components/Footer'

const IndexPage = () => {
	const saleEnd = new Date(Date.UTC(2021, 3, 10, 15, 13, 34))

	return (
		<Layout>
			<Seo title="iPhone 12" />
			<Timer end={saleEnd} />
			<Product end={saleEnd} />
			<Footer />
		</Layout>
	)
}

export default IndexPage
