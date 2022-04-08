import axios from 'axios'
import React from 'react'

import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';

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
  dbConnect();

  const data = await Product.findOne({_id: productid});

  return {
    props: {
      product: JSON.parse(JSON.stringify(data))
    }
  }
}


function productDetail({product}) {
  return (
    <div className={styles.main_container}>
      <p>Work In progress...</p>
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