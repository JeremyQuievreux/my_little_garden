import '../styles/globals.scss'

import React ,{ useState }from 'react'

import Layout from "../comps/Layout"

export const CartContext = React.createContext()

function MyApp({ Component, pageProps }) {

const [ cart, setCart ] = useState([
  {
    article : 
    {
      name: "Aneth Officinale AB",
      url_pic: "https://www.fermedesaintemarthe.com/Image/25998/345x345/aneth-officinale-ab.webp",
      famille: "Aromatique",
      semis : {
          janvier: false,
          fevrier: false,
          mars: false,
          avril: true,
          mai: true,
          juin: false,
          juillet: false,
          aout: false,
          septembre: false,
          octobre: false,
          novembre: false,
          décembre: false
      },
      recolte : {
          janvier: false,
          fevrier: false,
          mars: false,
          avril: false,
          mai: false,
          juin: false,
          juillet: true,
          aout: true,
          septembre: true,
          octobre: false,
          novembre: false,
          décembre: false
      },
      price: 3.95,
      description: "Ses feuilles fraîches ou séchées parfument les plats de poissons ou les soupes. Les graines d´aneth s´utilisent en infusion, dans les liqueurs ou confitures."
    },
    quantity: 2
  },
  {
    article : 
    {
      name: "Anis Vert AB",
      url_pic: "https://www.fermedesaintemarthe.com/Image/25998/345x345/aneth-officinale-ab.webp",
      famille: "Aromatique",
      semis : {
          janvier: false,
          fevrier: false,
          mars: false,
          avril: true,
          mai: true,
          juin: false,
          juillet: false,
          aout: false,
          septembre: false,
          octobre: false,
          novembre: false,
          décembre: false
      },
      recolte : {
          janvier: false,
          fevrier: false,
          mars: false,
          avril: false,
          mai: false,
          juin: false,
          juillet: true,
          aout: true,
          septembre: true,
          octobre: false,
          novembre: false,
          décembre: false
      },
      price: 3.95,
      description: "Ses feuilles fraîches ou séchées parfument les plats de poissons ou les soupes. Les graines d´aneth s´utilisent en infusion, dans les liqueurs ou confitures."
    },
    quantity: 10
  },
  {
    article : 
    {
      name: "Basilic Anis AB",
      url_pic: "https://www.fermedesaintemarthe.com/Image/25998/345x345/aneth-officinale-ab.webp",
      famille: "Aromatique",
      semis : {
          janvier: false,
          fevrier: false,
          mars: false,
          avril: true,
          mai: true,
          juin: false,
          juillet: false,
          aout: false,
          septembre: false,
          octobre: false,
          novembre: false,
          décembre: false
      },
      recolte : {
          janvier: false,
          fevrier: false,
          mars: false,
          avril: false,
          mai: false,
          juin: false,
          juillet: true,
          aout: true,
          septembre: true,
          octobre: false,
          novembre: false,
          décembre: false
      },
      price: 3.95,
      description: "Ses feuilles fraîches ou séchées parfument les plats de poissons ou les soupes. Les graines d´aneth s´utilisent en infusion, dans les liqueurs ou confitures."
    },
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
