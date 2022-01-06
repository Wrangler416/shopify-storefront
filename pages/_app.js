import React from "react"
import '../styles/globals.css'
import App from 'next/app'
import '@shopify/polaris/build/esm/styles.css'


function MyApp({Component, pageProps}) {
  return (
      <Component {...pageProps} />
   
  )
}

export default MyApp

