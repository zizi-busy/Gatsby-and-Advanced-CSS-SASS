import React from 'react'
/* import Footer from './footer'
import Navbar from './navbar'  */

import styles from './layout.scss'




const Layout =(props) => {
    return(
        <div className={styles.container}>
       {props.children}  
        </div>
    )
}

export default Layout

/* const Layout =(props) => {
    return(
        <div className={styles.container}>
        <div className={styles.content}>
            <Navbar />
            {props.children}
        </div>
            <Footer/> 
        </div>
    )
}

export default Layout */