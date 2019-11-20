import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)
	const { author } = data.site.siteMetadata
	return (
		<footer className={footerStyles.footer}>
			<p>Created by {author}, © 2019</p>
		</footer>
	)
}

export default Footer
