import axios from 'axios'
import React from 'react'

import styles from '../../styles/pages/ProductDetail.module.scss'

export const getStaticPaths = async () => {
  const result = await axios.get('http://localhost:3000/api/products');
  const data = await result.data;

  const paths = data.map(product => {
    return {
      params: {productid: product._id.toString()}
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const productid = context.params.productid;
  const res = await axios('http://localhost:3000/api/products/'+ productid);
  const data = await res.data;

  return {
    props: {
      product: data
    }
  }
}

function productDetail({product}) {
  return (
    <div className={styles.main_container}>
      <div className={styles.product_container}>
        <div className={styles.left_block}>
          <img src={product.url_pic} alt="" />
        </div>
        <div className={styles.right_block}>
          <h2>{product.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default productDetail