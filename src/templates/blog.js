import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Typography, CssBaseline } from "@material-ui/core"
import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/styles.css"
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
        return <img className="innerBlogImages" alt={alt} src={url} />
      },
    },
  }
  const { title, publishedDate } = props.data.contentfulBlogPost
  const { json } = props.data.contentfulBlogPost.body
  return (
    <Layout>
      <Head pageTitle={title} />
      <CssBaseline />
      <div className="flex">
        <div className="blogEntryContainer">
          <div className="headerContainer">
            <Typography variant="h3" component="h3">
              {title}
            </Typography>
            <Typography variant="h5" component="h5">
              {publishedDate}
            </Typography>
          </div>
          {documentToReactComponents(json, options)}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
