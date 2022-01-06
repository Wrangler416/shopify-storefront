import {useRouter} from 'next/router'
import {client} from '../../util/shopify'
import {Grid, Input, Card, CardActionArea, CardMedia, CardContent, Typography,CardActions,Button} from '@material-ui/core'
import {useState} from "react"
// import { Image, Grid} from '@material-ui/core'


//grab product id from client through destructered context param "query"
export async function getServerSideProps({query}){
   const productId = query.productId

  const product = await client.product.fetch(productId)
  
  return {
   props: {product: JSON.parse(JSON.stringify(product))}
}
}
//productId gets passed as product

export default function ProductPage({product}){
   const [quantity, setQuantity] = useState(0)

//problem area 

  const addToCart = async ()=> {
         const checkout = await client.checkout.create().then((checkout) => {
            console.log(checkout)
         })}

   // const addToCart = async () => {
   //       const storage = window.localStorage
   //       let checkoutId = storage.getItem('checkoutId')
   //       console.log({checkoutId})

   //       if(!checkoutId){
   //          const checkout = await client.checkout.create()
   //          checkoutId = checkout.id 
   //          storage.setItem("checkoutId", checkoutId)
   //       }
       
   //       const cart = client.checkout.addLineItems(checkoutId, [{
   //          variantId: product.variants[0].id,
   //          quantity: quantity

   //       }])

   //       storage.setItem('cart', JSON.stringify(cart))
   // }

   
  const router = useRouter()
  const {productId} = router.query

      console.log(product)
      return (
         <div>
              <Card>
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
                  <CardActions>
                    <Typography>${product.price}</Typography>
                  <button onClick={addToCart}>Add to Cart</button>
                  {/* <input onChange={(e, {value}) => setQuantity(Number(value))}>0</input> */}
                  </CardActions>
              </Card>
         </div>
      )

}

// const addToCart = async () => {
      //    const checkout = await client.checkout.create()
      //    console.log(checkout.id)
      // }

    
      // }
      // const addToCart = ()=> {
      //    const checkout = client.checkout.create()
      //    console.log(checkout)
      // }

      // client.checkout.create().then((checkout) => {
         //    // Do something with the checkout
         //    console.log(checkout);
         //  });


// export async function getServerSideProps({query}){
//     const productId = query.productId
//     const product = await client.product.fetch({productId})
// console.log({product})

//   return {
//     props: {product: JSON.parse(JSON.stringify(product))}
//   }
// }

// const ProductPage = ({product})=> {
//     const router = useRouter()
//     const {productId} = router.query

//     return (
//         <div>
//             {product.title}
//             {product.description}
//         </div>
//     )
// }

  

// export default ProductPage


// import React from 'react'
// import {useRouter} from 'next/router'
// import {client} from '../../util/shopify'

// export async function getServerSideProps(){
//     const products = await client.product.fetchAll()
    
//     return {
//      props: {products: JSON.parse(JSON.stringify(products))}
//   }
//   }


// export default function ProductPage({products}){
// const router = useRouter()
// const {slug} = router.query
// const foundProduct = products.find(x => x.slug === slug)
// if(!foundProduct){
//     return <div>product not found</div>
// }
//     return (
//         <div>
//             <h1>{product.name}</h1>
//         </div>
//     )
// }


