import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'


const IndexPage = () => {
	return (
		<Layout>
			<Head pageTitle="Home" />
			<h1>Hello.</h1>
			<h2>
				I'm Sam, a front end developer in Sarasota, Florida
			</h2>
			<h3>
				Need a developer?{" "}
				<Link to="/contact">Contact Me!</Link>
			</h3>
		</Layout>
	)
}

export default IndexPage
