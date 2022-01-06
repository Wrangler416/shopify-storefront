import Head from 'next/head'
import Layout from "../components/Layout"
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography,CardActions,Button} from '@material-ui/core'
import {client} from '../util/shopify'
// import NextLink from 'next/link'
//import {Link} from '@material-ui/core'
import Link from 'next/link'


export async function getServerSideProps(){
  const products = await client.product.fetchAll()
  
  return {
   props: {products: JSON.parse(JSON.stringify(products))}
}
}

export default function Index({products}) {

  // console.log(products)
  return (
    <Layout>
    <div>
      <Grid container spacing ={2}>
      {products.map((product) => (
         <Grid item md ={3} 
                key={product.id}>
                  <Link href={`/product/${product.id}`}>
              <Card>
                {/* //<NextLink href={`product/${product.slug}`} passHref> */}
                  <CardActionArea>
                    <CardMedia component="img" image={product.images[0].src}>
                    </CardMedia>
                    <CardContent>
                      <Typography>
                        <h1>{product.title}</h1>
                        <h3>{product.description}</h3>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* </NextLink> */}
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <button>Add to Cart</button>

                    <Button size="medium"></Button>
                  </CardActions>
              </Card>
              </Link>
         </Grid>
       ))}
  
       </Grid>
       </div>
   </Layout>
)
}



















// import React from "react"
// import {client} from '../util/shopify'
// import Head from 'next/head'
// import Navbar from '../components/Navbar'
// import {Card, Image} from 'semantic-ui-react'
// import Link from "next/link"
// import Header from "../components/Header"
// import '@shopify/polaris/build/esm/styles.css'

// //import styles from "../styles/Home.module.css"
// //import {Card, Image, Header } from '@shopify/polaris'
// //import {Layout, Page, Card, Link, Button, Header, Image, FormLayout, TextField, AccountConnection, ChoiceList} from '@shopify/polaris'
// export default function Index({products}){
//   //console.log(products)

//   return (
//    <div>
//       <Head>
//         <title>Kara's Shop</title>
//         <link rel="stylesheet" 
//               href="https://unpkg.com/@shopify/polaris@7.5.0/build/esm/styles.css"
//         />
//       </Head>
//       <Navbar />
      
//       <Header />

//         {products.map((product) => {
       
//           return (
//             <div>   
//             <Link href={`/product/${product.id}`}> 
//               <Card>
//                 <Image height="300px"src={product.images[0].src}/>
//                   <h1>{product.title}</h1>
//               <h3>{product.description}</h3>
            
//               </Card>
              
//             </Link>
//               </div>
//           )
//         })}
      
//         </div>
//   )
// }

// export async function getServerSideProps(){
//   const products = await client.product.fetchAll()

//   return {
//     props: {products: JSON.parse(JSON.stringify(products))}
//   }
// }



