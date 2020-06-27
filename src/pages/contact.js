import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Paper, Typography, CssBaseline } from "@material-ui/core"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/styles.css"
import Layout from "../components/layout"
import Head from "../components/head"

import { useStyles } from "../styles/useStyles"

const ContactPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query ContactImage {
      imageSharp: file(relativePath: { eq: "images/7712.jpg" }) {
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
      <Head pageTitle="Contact" />
      <CssBaseline />
      <div className="flex">
        <div className="contactContainer">
          <Typography
            variant="h3"
            component="h3"
          >
            Contact Me
          </Typography>
          <div className="contactInfoContainer">
            <div className="contactInfoItem" style={{marginBottom: "10px"}} >
              <PhoneIcon color="primary" size={30} />
              <Typography
                variant="h5"
                component="h5"
                style={{ marginLeft: "20px", color: "#333" }}
              >
                (919) 605-4298
              </Typography>
            </div>
            <div className="contactInfoItem" style={{marginBottom: "10px"}}>
              <EmailIcon size={30} color="primary" />
              <Typography
                variant="h5"
                component="h5"
                style={{ marginLeft: "20px", color: "#333" }}
              >
                sthoyre@gmail.com
              </Typography>
            </div>
            <a
              className="contactInfoItem" style={{marginBottom: "10px"}}
              href="https://twitter.com/SamThoyre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon size={30} color="primary" />
              <Typography
                variant="h5"
                component="h5"
                style={{ marginLeft: "20px" }}
              >
                @SamThoyre
              </Typography>
            </a>
            <a
              className="contactInfoItem"
              href="https://twitter.com/SamThoyre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={30} color="primary" />
              <Typography
                variant="h5"
                component="h5"
                style={{ marginLeft: "20px" }}
              >
                LinkedIn Profile
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
