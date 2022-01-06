import React from "react"
import '../styles/globals.css'
import App from 'next/app'
import '@shopify/polaris/build/esm/styles.css'
//import 'semantic-ui-css'
import {CartProvider} from 'react-use-cart'


function MyApp({Component, pageProps}) {
  return (
      <CartProvider>
      <Component {...pageProps} />
      </CartProvider>
        
  )
}

export default MyApp
