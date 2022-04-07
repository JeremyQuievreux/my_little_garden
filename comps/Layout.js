import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
      <div className='main-container'>
          <Header/>
          { children }
          <Footer/>
      </div>
  )
}

export default Layout