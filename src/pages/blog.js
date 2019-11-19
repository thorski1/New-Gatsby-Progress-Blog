import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.scss"
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
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(post => {
          const { title, publishedDate, slug } = post.node
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
