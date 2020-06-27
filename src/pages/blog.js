import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Typography, CssBaseline} from "@material-ui/core"
import "../styles/styles.css"
import Layout from "../components/layout"
import Head from "../components/head"

import { useStyles } from "../styles/useStyles"

const BlogPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            thumbnail {
              file {
                url
              }
            }
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const { edges } = data.allContentfulBlogPost
  return (
    <Layout>
      <Head pageTitle="Blog" />
      <CssBaseline />
      <div className="flex">
        <div className="container">
                <Typography style={{marginBottom: "3rem", marginLeft: "1rem"}} variant="h3" component="h3">
                  Progress Blog
                </Typography>
          <div className="orderedList">
            {edges.map(post => {
              const { title, publishedDate, slug, thumbnail } = post.node
              return (
                
                  <Link key={slug} style={{textDecoration: "none"}} to={`/blog/${slug}`}>
                    <div className="postPaper">
                        <img
                          className="blogPageImg"
                          src={thumbnail.file.url}
                          alt={title}
                        />
                        <Typography
                          className="paper"
                          variant="h4"
                          component="h4"
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                        >
                          {publishedDate}
                        </Typography>
                    </div>
                  </Link>
                
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
