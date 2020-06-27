import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Head from "../components/head"
import { useStyles } from "../styles/useStyles"
import '../styles/styles.css'

export default function IndexPage() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query IndexImage {
      imageSharp: file(relativePath: { eq: "images/KaijaSmiles.jpg" }) {
        id
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head pageTitle="Home" />
      <CssBaseline />
      <div className="flex">
        <div className="container">
          <div className="homePageContentContainer">
            <div className="homePageTextContainer">
              <Typography variant="h3" component="h3" gutterBottom={true} style={{marginBottom: "2.5rem"}}>
                Sam Thoyre's Blog
              </Typography>
              <Typography variant="h6" component="h6">
                Every day, since July 16th, 2019, I've written a blog entry
                documenting my progress in learning about web development.
                Officially, I started studying on May 26th, 2019 and haven't
                missed a day of putting in at least 3 hours of learning, and
                often a lot more than that. It's been quite the adventure, and I
                hope this blog helps other aspiring developers learn from my
                mistakes and successes to help them achieve their goals in the
                most efficient manner!
              </Typography>
            </div>

            <img
              className="homePageImage"
              src={data.imageSharp.childImageSharp.original.src}
              alt="Sam and Kaija"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
