import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "../styles/blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            image {
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
      <h1 className={blogStyles.header}>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(post => {
          const { title, publishedDate, slug, image } = post.node
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
                <img alt={title} src={image.file.url} />
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
