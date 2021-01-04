import React from 'react'
import Footer from './Footer.jsx'
import Header from "./Header"

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
