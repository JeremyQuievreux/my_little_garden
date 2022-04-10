import axios from 'axios'
import React from 'react'

import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';

import Image from 'next/image'

import styles from '../../styles/pages/ProductDetail.module.scss'

export const getStaticPaths = async () => {

  dbConnect();

  const data = await Product.find();

  const parsed = JSON.parse(JSON.stringify(data))


  const paths = parsed.map(product => {
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
          <Image src={product.url_pic} alt="" height={400} width={400} />
        </div>
        <div className={styles.right_block}>
          <h2>{product.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default productDetail