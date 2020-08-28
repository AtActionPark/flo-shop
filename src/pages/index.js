import React from "react"

import StoreLayout from "../components/StoreLayout"
import SEO from "../components/SEO"
import Home from "../components/Home";

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home></Home>
  </StoreLayout>
)

export default IndexPage
