import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProductImage from './ProductImage'

const Product = ({ end }) => {
	const data = useStaticQuery(graphql`
		query productQuery {
			product {
				title
				id
				variants {
					color
					compare_at_price
					description
					image
					price
					id
				}
			}
		}
	`)

	const [loading, setLoading] = useState(false)
	const [count, setCount] = useState(1)
	const [available, setAvailable] = useState(
		end - new Date().getTime() <= 0 ? false : true
	)
	const [product, setProduct] = useState(data.product)
	const [variation, setVariation] = useState(0)

	// useEffect(function () {
	// 	const data = fetch(
	// 		'https://cdn.shopify.com/s/files/1/0333/4474/9700/files/product.json'
	// 	)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data)
	// 			setProduct(data)
	// 		})
	// }, [])

	const handleVariantClick = e => {
		setVariation(e.target.getAttribute('index'))
	}

	const decrementCount = () => {
		if (count > 0) setCount(count - 1)
	}

	const incrementCount = () => {
		setCount(count + 1)
	}

	return (
		<div className="container py-5">
			<div className="product-layout">
				<div className="product-layout_image">
					{product && (
						<ProductImage
							image={product.variants[variation].image}
							alt={product.variants[variation].color}
						/>
					)}
				</div>
				<div className="product-layout_header">
					<div className="product-layout_title">
						{product && product.title}
					</div>
					<div className="product-layout_variations d-flex">
						{product &&
							product.variants.map((variant, i) => (
								<button
									key={i}
									index={i}
									type="button"
									className={`btn ${
										i == variation ? 'btn-active' : ''
									}`}
									onClick={handleVariantClick}
								>
									{variant.color}
								</button>
							))}
					</div>
					<hr className="d-sm-none" />
				</div>

				<div className="product-layout_detail">
					<div className="product-layout_description pb-4">
						{product && product.variants[variation].description}
					</div>
					<div className="product-layout_price mb-2">
						<div className="product-layout_price-compare">
							{product &&
								'WAS $' +
									product.variants[variation]
										.compare_at_price}
						</div>
						<div className="product-layout_price-current">
							{product && '$' + product.variants[variation].price}
						</div>
						{product &&
							product.variants[variation].compare_at_price &&
							product.variants[variation].price && (
								<div className="product-layout_price-discount mx-3">
									SAVE (
									{Math.floor(
										100 -
											(product.variants[variation].price /
												product.variants[variation]
													.compare_at_price) *
												100
									)}
									%)
								</div>
							)}
					</div>
					<div className="product-layout_actions d-flex">
						<button
							id={product && product.variants[variation].id}
							type="button"
							className="product-layout_purchase btn"
							disabled={!available}
						>
							{available && available ? 'BUY IT NOW' : 'SOLD OUT'}
						</button>
						<span className="product-layout_count border rounded mx-3">
							<span
								className="less text-muted"
								onClick={decrementCount}
							>
								-
							</span>
							<span className="count text-secondary mx-5">
								{count}
							</span>
							<span
								className="more text-muted"
								onClick={incrementCount}
							>
								+
							</span>
						</span>
					</div>
					<hr className=".d-none d-sm-block d-md-none" />
				</div>
			</div>
		</div>
	)
}

export default Product
