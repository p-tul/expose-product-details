import React from 'react'

const ProductImage = ({ image, alt }) => {
	return (
		<div className="product-image_wrapper border rounded p-5">
			<img src={image} alt={alt} />
		</div>
	)
}

export default ProductImage
