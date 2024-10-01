import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({
  children,
  location,
  setTags,
  collection,
  collectionTitle,
}) => {
  return (
    <>
      <Header
        location={location}
        setTags={setTags}
        collection={collection}
        collectionTitle={collectionTitle}
      ></Header>
      <main>{children}</main>
      {location ? (
        location.pathname !== '/' ? (
          <Footer></Footer>
        ) : null
      ) : (
        <Footer></Footer>
      )}
    </>
  )
}

export default Layout
