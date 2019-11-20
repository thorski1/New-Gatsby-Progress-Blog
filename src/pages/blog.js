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
      <h1 className={blogStyles.header}>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(post => {
          const { title, publishedDate, slug, thumbnail } = post.node
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <div className={blogStyles.postContainer}>
                  <img
                    alt={title}
                    src={thumbnail.file.url}
                    className={blogStyles.thumbnailImg}
                  />
                  <div className={blogStyles.postContent}>
                    <h2>{title}</h2>
                    <p>{publishedDate}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
