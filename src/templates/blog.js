import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Paper, Typography, CssBaseline } from "@material-ui/core"
import Layout from "../components/layout"
import Head from "../components/head"

import { useStyles } from "../styles/useStyles"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const classes = useStyles()
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img className={classes.img} alt={alt} src={url} />
      },
    },
  }
  const { title, publishedDate } = props.data.contentfulBlogPost
  const { json } = props.data.contentfulBlogPost.body
  return (
    <Layout>
      <Head pageTitle={title} />
      <CssBaseline />
      <div className={classes.flex}>
        <Paper elevation="15" className={classes.container}>
          <Paper className={classes.titleOuter} elevation="15">
            <Paper elevation="15" className={classes.root}>
              <Typography className={classes.root}>
                <Typography variant="h3" component="h3">
                  {title}
                </Typography>
              </Typography>
            </Paper>
            <Paper className={classes.paper} elevation="15">
              <Typography variant="p" component="p">
                {publishedDate}
              </Typography>
            </Paper>
          </Paper>
          <Paper className={classes.blogPaper} elevation="15">
            {documentToReactComponents(json, options)}
          </Paper>
        </Paper>
      </div>
    </Layout>
  )
}

export default Blog
