import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "images/KaijaSmiles.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head pageTitle="Home" />
      <h1 className={indexStyles.header}>Documenting my learning journey</h1>
      <Img
        className={indexStyles.img}
        fluid={data.file.childImageSharp.fluid}
        alt="Sam and Kaija"
      />
      <p className={indexStyles.intro}>
        Every day, since July 16th, 2019, I've written a blog entry documenting
        my progress in learning about web development. Officially, I started
        studying on May 26th, 2019 and haven't missed a day of putting in at
        least 3 hours of learning, and often a lot more than that. It's been
        quite the adventure, and I hope this blog helps other aspiring
        developers learn from my mistakes and successes to help them achieve
        their goals in the most efficient manner!
      </p>
    </Layout>
  )
}

export default IndexPage
