import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {Paper, Typography, CssBaseline} from "@material-ui/core"

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
      <div className={classes.flex}>
        <Paper elevation="15" className={classes.container}>
          <Paper className={classes.titleOuter} elevation="15">
            <Paper elevation="15" className={classes.root}>
              <Typography className={classes.root}>
                <Typography variant="h3" component="h3">
                  Progress Blog
                </Typography>
              </Typography>
            </Paper>
          </Paper>
          <div className={classes.orderedList}>
            {edges.map(post => {
              const { title, publishedDate, slug, thumbnail } = post.node
              return (
                
                  <Link key={slug} style={{textDecoration: "none"}} to={`/blog/${slug}`}>
                    <Paper className={classes.paper} elevation="15">
                      <Paper className={classes.paper} elevation="15">
                        <img
                          className={classes.img}
                          src={thumbnail.file.url}
                          alt={title}
                        />
                      </Paper>
                      <Paper className={classes.paper} elevation="15">
                        <Typography
                          className={classes.paper}
                          variant="h4"
                          component="h4"
                        >
                          {title}
                        </Typography>
                      </Paper>
                      <Paper className={classes.paper} elevation="15">
                        <Typography
                          variant="p"
                          component="p"
                        >
                          {publishedDate}
                        </Typography>
                      </Paper>
                    </Paper>
                  </Link>
                
              )
            })}
          </div>
        </Paper>
      </div>
    </Layout>
  )
}

export default BlogPage
