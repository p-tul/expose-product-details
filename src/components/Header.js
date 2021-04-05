import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
	<div className="">
		<Link to="/">
			<h1 className="border-bottom py-3 mx-auto text-center main-logo">
				{siteTitle}
			</h1>
		</Link>
	</div>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
