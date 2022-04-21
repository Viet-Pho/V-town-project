import React, { Children } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props): React.ReactElement {
  return (
    <div>
      <Header />
      {children}
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
