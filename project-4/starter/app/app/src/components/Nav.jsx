import React from 'react'
import styles from './nav.module.css'
export const nav = () => {
  


  
  return (

    <nav className={`${styles.nav} container`}>
            <div className="logo">
            <img src = "./images/logo.svg" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact Us</li>
               
            </ul>
        </nav>
  )
}

export default nav;