import React  from 'react'
import styles from '../../styles/pages/Products.module.scss'

import ProductCard from '../../comps/ProductCard';

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
  try {
    const result = await axios.get('http://localhost:3000/api/products');
    const data = await result.data;
    return {
        props: {
            products: data
        }
    }
  } catch (error) {
    console.log(error);
  }
}