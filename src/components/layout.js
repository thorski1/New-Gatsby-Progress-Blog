import React from "react"
import "typeface-roboto"
import Header from "./header"
import Footer from "./footer"

import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"


export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <Container maxWidth="sm">{props.children}</Container>
      
      <Footer />
    </React.Fragment>
  )
}
