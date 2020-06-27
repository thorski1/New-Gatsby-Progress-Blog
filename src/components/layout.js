import React from "react"
import "typeface-roboto"
import Header from "./header"
import Footer from "./footer"

import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"


export default function Layout(props) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #a1c1da 0%,#f2f5fb 100%)",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CssBaseline />
      <Header />

      <Container maxWidth="sm">{props.children}</Container>
<Footer />

      
    </div>
  )
}
