import '../styles/globals.scss'

import React ,{ useState }from 'react'

import Layout from "../comps/Layout"

export const CartContext = React.createContext()

function MyApp({ Component, pageProps }) {

const [ cart, setCart ] = useState([])

const cartContextValue = {
  data: cart,
  updateCart: setCart
}

  return (
    <CartContext.Provider value={cartContextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  )
}

export default MyApp
