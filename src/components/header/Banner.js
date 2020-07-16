import React from "react"

import { Link } from "gatsby"
import styles from './banner.module.scss'


const Banner = ({ title, info }) => {
  return (
<div className={styles.headerTextBox}>
<h1 className={styles.headerText}>
    <span className={styles.headerTextTitle}>{title}</span>
    <span className={styles.headerTextSub}>{info}</span>
</h1>
     <Link to='/#/' className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>
          Discover our world
        </Link>
</div>
  )
}

export default Banner

