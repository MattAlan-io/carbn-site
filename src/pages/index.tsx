import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPage from "./landing-page/landing-page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
  </Layout>
)

export default IndexPage
