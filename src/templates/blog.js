import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

import blogTemplateStyles from '../styles/blogTemplate.module.scss'

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
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return (
          <img className={blogTemplateStyles.img} alt={alt} src={url} />
        )
      },
    },
  }
  const { title, publishedDate } = props.data.contentfulBlogPost
  const { json } = props.data.contentfulBlogPost.body
  return (
    <Layout>
      <Head pageTitle={title} />
      <div className={blogTemplateStyles.container}>
        <div className={blogTemplateStyles.headerContainer}>
          <h1 className={blogTemplateStyles.title}>{title}</h1>
          <p className={blogTemplateStyles.date}>{publishedDate}</p>
        </div>
        <div>{documentToReactComponents(json, options)}</div>
      </div>
    </Layout>
  )
}

export default Blog
