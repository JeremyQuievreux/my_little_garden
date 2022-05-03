import React from 'react'
import Link from 'next/link'
import styles from '../styles/comps/Footer.module.scss'

function Footer() {
  return (
    <div className={styles.container}>
        <p>DevHyllen 2022 © Copyright</p>
        <div>
          <Link href={"/about"}><a><div><p>A Propos</p></div></a></Link>
          <Link href={"/contact"}><a><div><p>Contactez nous</p></div></a></Link>
        </div>
    </div>
  )
}

export default Footer