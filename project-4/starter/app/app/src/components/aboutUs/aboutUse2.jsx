import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './aboutUs.module.css'

const aboutUse2 = () => {
  return (
    <div class={`${styles.row}`}>
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">A Feast for the Senses</h2>
        <p className="lead">As you step inside our restaurant, you'll be greeted by a warm ambiance that sets the stage for an unforgettable dining experience. The soft glow of candlelight, the hum of conversation, and the aroma of exquisite dishes combine to create an atmosphere that's both inviting and enchanting.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <img className='col-md-12' src='https://img.freepik.com/free-photo/confident-asian-businesswoman-showing-thumbs-up-standing-near-entrance-her-cafe-restaurant-rec_1258-126151.jpg?w=2000&t=st=1694338565~exp=1694339165~hmac=c3ca0949c48b4a691041156e99fc27a6231709efaebaa9e81367830f456b04c9'width="500" 
     height="400"/>
      </div>
    </div>
  )
}

export default aboutUse2