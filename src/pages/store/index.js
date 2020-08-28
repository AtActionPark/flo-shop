import React from "react"

import StoreLayout from "../../components/StoreLayout"
import Products from "../../components/Products"
import SEO from "../../components/SEO"

const Index = () => (
  <StoreLayout>
    <SEO title="Store" keywords={[`gatsby`, `application`, `react`]} />
    <Products></Products>
  </StoreLayout>
)

export default Index
