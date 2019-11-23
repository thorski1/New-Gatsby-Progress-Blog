import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Paper, Typography, CssBaseline } from "@material-ui/core"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import Layout from "../components/layout"
import Head from "../components/head"

import { useStyles } from "../styles/useStyles"

const ContactPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query ContactImage {
      imageSharp: file(relativePath: { eq: "images/profilePic.jpg" }) {
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
      <div className={classes.flex}>
        <Paper elevation="15" className={classes.container}>
          <Paper className={classes.titleOuter} elevation="15">
            <Paper elevation="15" className={classes.root}>
              <Typography className={classes.root}>
                <Typography variant="h3" component="h3">
                  Contact Me
                </Typography>
              </Typography>
            </Paper>
          </Paper>

          <Paper className={classes.contactInfo} elevation="15">
            <Paper elevation="15" className={classes.contactInfo}>
              <Paper elevation="15" className={classes.contactInfo}>
                <Typography variant="h4" component="h4">
                  <PhoneIcon color="primary" fontSize="inherit" />
                  {"   "}919-605-4298
                </Typography>
                <Typography variant="h4" component="h4">
                  <EmailIcon color="primary" fontSize="inherit" />
                  {"   "}sthoyre@gmail.com
                </Typography>
                <Typography variant="h4" component="h4">
                  <a
                    className={classes.link}
                    href="https://twitter.com/SamThoyre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon color="primary" fontSize="inherit" />
                    {"   "}
                    @SamThoyre
                  </a>
                </Typography>
                <Typography variant="h4" component="h4">
                  <a
                    className={classes.link}
                    href="https://www.linkedin.com/in/sam-thoyre-19829031"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" fontSize="inherit" />
                    {"   "}LinkedIn Profile
                  </a>
                </Typography>
              </Paper>
            </Paper>
          </Paper>
          <Paper elevation="15" className={classes.paper}>
            <img
              className={classes.contactImg}
              src={data.imageSharp.childImageSharp.original.src}
              alt="Sam and Kaija"
            />
          </Paper>
        </Paper>
      </div>
    </Layout>
  )
}

export default ContactPage
