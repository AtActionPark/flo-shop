import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import css from "./Header.module.css"
import Cart from "./Cart"

function Header(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={css.header}>
      <nav>
        <Link to="/" className={css.title}>
          {data.site.siteMetadata.title}
        </Link>
        <div >
          <Link className={css.links} to="/store">Store</Link>
          <Link className={css.links} to="/faq">FAQ</Link>
          <Link className={css.links} to="/contact">Contact</Link>
          <Link className={css.links} to="/admin">Admin</Link>
          {props.cart && <Cart />}
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = { cart: PropTypes.bool.isRequired }

export default Header
