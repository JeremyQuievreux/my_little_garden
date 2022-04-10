//imports
  //base React + style
import React  from 'react'
import styles from '../../styles/pages/Products.module.scss'
  //utils for connect to db
import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';
  //Component
import ProductCard from '../../comps/ProductCard';
//pre rendering
export async function getStaticProps() {

  dbConnect();

  const data = await Product.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(data))
    }
  }
}
//component
function products({products}) {

  return (
    <div className={styles.container}>
        <h1>Nos Produits : </h1>
        <div className={styles.products_container}>
          {products.map((product) => {
            return(
              <ProductCard key={product._id} product={product}/>
            )
          })}
        </div>
    </div>
  )
}

export default products
