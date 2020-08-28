import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import ProductsProvider from "./ProductsProvider"
import CartProvider from "./CartProvider"
import css from "./StoreLayout.module.css"

const StoreLayout = ({ children }) => {
  return (
    <ProductsProvider>
        <CartProvider>
          <Header cart></Header>

          <main className={css.main}>{children}</main>

          <footer style={{ textAlign: "center", margin: "2rem 0" }}>
            <span>all rights reserved, blablabla</span>
          </footer>
        </CartProvider>
      </ProductsProvider>
  )
}

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreLayout
