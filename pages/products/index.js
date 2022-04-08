import React  from 'react'
import styles from '../../styles/pages/Products.module.scss'

import ProductCard from '../../comps/ProductCard';

import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';

const axios = require('axios').default;

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

export async function getStaticProps() {

  dbConnect();

  const data = await Product.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(data))
    }
  }
}