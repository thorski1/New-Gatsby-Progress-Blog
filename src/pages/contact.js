import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

import contactStyles from "../styles/contact.module.scss"

const ContactPage = () => {
	 const data = useStaticQuery(graphql`
     query ContactImages {
       image: file(relativePath: { eq: "images/profilePic.jpg" }) {
         id
         childImageSharp {
           fixed(
             width: 400
           ) {
             ...GatsbyImageSharpFixed
           }
           fluid(
             maxWidth: 200
             maxHeight: 200
           ) {
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
   `)
	return (
    <Layout>
      <Head pageTitle="Contact" />

      <h1 className={contactStyles.header}>Contact Me!</h1>
      <div className={contactStyles.container}>
        <Img
          className={contactStyles.img}
          fixed={data.image.childImageSharp.fixed}
          alt="Sam and Kaija"
        />
        <div className={contactStyles.info}>
          <h2>
            <span className={contactStyles.infoType}>Phone Number:</span>{" "}
            919-605-4298
          </h2>
          <h2>
            <span className={contactStyles.infoType}>Email:</span>{" "}
            sthoyre@gmail.com
          </h2>
          <h2>
            <span className={contactStyles.infoType}>Twitter:</span>{" "}
            <a
              href="https://twitter.com/SamThoyre"
              target="_blank"
              rel="noopener noreferrer"
            >
              @SamThoyre
            </a>
          </h2>
          <h2>
            <span className={contactStyles.infoType}>LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/sam-thoyre-19829031"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam Thoyre
            </a>
          </h2>
          <h2>
            <span className={contactStyles.infoType}>Github:</span>{" "}
            <a
              href="https://github.com/thorski1"
              target="_blank"
              rel="noopener noreferrer"
            >
              thorski1
            </a>
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
