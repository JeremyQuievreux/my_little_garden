import '../styles/globals.scss'

import React ,{ useState }from 'react'

import Layout from "../comps/Layout"

export const CartContext = React.createContext()

function MyApp({ Component, pageProps }) {

const [ cart, setCart ] = useState([
  {
    article : "article 1",
    quantity: 2
  },
  {
    article : "article 2",
    quantity: 10
  },
  {
    article : "article 3",
    quantity: 5
  }
])

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
