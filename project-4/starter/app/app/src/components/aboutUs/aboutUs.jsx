import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './aboutUs.module.css'

const aboutUs = () => {
  return (
    <div className={`${styles.row}`}>
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Crafted with Passion</h2>
      <p className="lead">Every dish that graces your table is a masterpiece, carefully crafted by our world-class chefs. We are dedicated to sourcing the finest ingredients, blending flavors from around the world, and presenting them with a touch of innovation that's uniquely ours.</p>
    </div>
    <div className="col-md-5">
<img style={{
        height: '90%'}} className='' src='https://img.freepik.com/free-photo/chef-working-together-professional-kitchen_23-2149728002.jpg?t=st=1694337708~exp=1694338308~hmac=f232bcd1f18d6b14092d1ab1de5bf404ea02c137b551cd3b38a52e568b060ba2 '/>
    </div>
  </div>
  )
}

export default aboutUs

