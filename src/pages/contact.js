import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"


const ContactPage = () => {
	return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1>Contact Me!</h1>
      <h2>Phone Number: 919-605-4298</h2>
      <h2>Email: sthoyre@gmail.com</h2>
      <h2>
        Twitter:{" "}
        <a
          href="https://twitter.com/SamThoyre"
          target="_blank"
          rel="noopener noreferrer"
        >
          @SamThoyre
        </a>
      </h2>
      <h2>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sam-thoyre-19829031"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sam Thoyre
        </a>
      </h2>
      <h2>
        Github Profile:{" "}
        <a
          href="https://github.com/thorski1"
          target="_blank"
          rel="noopener noreferrer"
        >
          thorski1
        </a>
      </h2>
    </Layout>
  )
}

export default ContactPage
