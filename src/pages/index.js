import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Head from "../components/head"
import { useStyles } from "../styles/useStyles"

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
      <div className={classes.flex}>
        <Paper elevation="15" className={classes.container}>
          <Paper className={classes.titleOuter} elevation="15">
            <Paper elevation="15" className={classes.root}>
              <Typography className={classes.root}>
                <Typography variant="h3" component="h3">
                  My Learning Journey{" "}
                </Typography>
              </Typography>
            </Paper>
          </Paper>
          <Paper className={classes.paper} elevation="15">
            <img
              className={classes.img}
              src={data.imageSharp.childImageSharp.original.src}
              alt="Sam and Kaija"
            />
          </Paper>
          <Paper className={classes.postPaper} elevation="15">
            <Typography className={classes.paper} variant="h5" component="h5">
              Every day, since July 16th, 2019, I've written a blog entry
              documenting my progress in learning about web development.
              Officially, I started studying on May 26th, 2019 and haven't
              missed a day of putting in at least 3 hours of learning, and often
              a lot more than that. It's been quite the adventure, and I hope
              this blog helps other aspiring developers learn from my mistakes
              and successes to help them achieve their goals in the most
              efficient manner!
            </Typography>
          </Paper>
        </Paper>
      </div>
    </Layout>
  )
}
